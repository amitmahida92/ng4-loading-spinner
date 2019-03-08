/* eslint-disable */
const gulp = require('gulp');
const path = require('path');
const ngc = require('@angular/compiler-cli/src/main').main;
const rollup = require('gulp-rollup');
const rename = require('gulp-rename');
const del = require('del');
const inlineResources = require('./tools/gulp/inline-resources');

const rootFolder = path.join(__dirname);
const srcFolder = path.join(rootFolder, 'src');
const tmpFolder = path.join(rootFolder, '.tmp');
const buildFolder = path.join(rootFolder, 'build');
const distFolder = path.join(rootFolder, 'dist');

/**
 * 1. Delete /dist folder
 */
function clean_dist() {

  // Delete contents but not dist folder to avoid broken npm links
  // when dist directory is removed while npm link references it.
  return deleteFolders([distFolder + '/**', '!' + distFolder]);
}

/**
 * 2. Clone the /src folder into /.tmp. If an npm link inside /src has been made,
 *    then it's likely that a node_modules folder exists. Ignore this folder
 *    when copying to /.tmp.
 */
function copy_source() {
  return gulp.src([`${srcFolder}/**/*`, `!${srcFolder}/node_modules`])
    .pipe(gulp.dest(tmpFolder));
}

/**
 * 3. Inline template (.html) and style (.css) files into the the component .ts files.
 *    We do this on the /.tmp folder to avoid editing the original /src files
 */
function inline_resources() {
  return Promise.resolve()
    .then(() => inlineResources(tmpFolder));
}


/**
 * 4. Run the Angular compiler, ngc, on the /.tmp folder. This will output all
 *    compiled modules to the /build folder.
 *
 *    As of Angular 5, ngc accepts an array and no longer returns a promise.
 */
function ngcompiler() {
  ngc(['--project', `${tmpFolder}/tsconfig.es5.json`]);
  return Promise.resolve()
}

/**
 * 5. Run rollup inside the /build folder to generate our Flat ES module and place the
 *    generated file into the /dist folder
 */
function rollup_fesm() {
  return gulp.src(`${buildFolder}/**/*.js`)
    // transform the files here.
    .pipe(rollup({

      // Bundle's entry point
      // See "input" in https://rollupjs.org/#core-functionality
      input: `${buildFolder}/index.js`,

      // Allow mixing of hypothetical and actual files. "Actual" files can be files
      // accessed by Rollup or produced by plugins further down the chain.
      // This prevents errors like: 'path/file' does not exist in the hypothetical file system
      // when subdirectories are used in the `src` directory.
      allowRealFiles: true,

      // A list of IDs of modules that should remain external to the bundle
      // See "external" in https://rollupjs.org/#core-functionality
      external: [
        '@angular/core',
        '@angular/common',
        'rxjs'
      ],

      output: {
        // Format of generated bundle
        // See "format" in https://rollupjs.org/#core-functionality
        format: 'es'
      }
    }))
    .pipe(gulp.dest(distFolder));
}

/**
 * 6. Run rollup inside the /build folder to generate our UMD module and place the
 *    generated file into the /dist folder
 */
function rollup_umd() {
  return gulp.src(`${buildFolder}/**/*.js`)
    // transform the files here.
    .pipe(rollup({

      // Bundle's entry point
      // See "input" in https://rollupjs.org/#core-functionality
      input: `${buildFolder}/index.js`,

      // Allow mixing of hypothetical and actual files. "Actual" files can be files
      // accessed by Rollup or produced by plugins further down the chain.
      // This prevents errors like: 'path/file' does not exist in the hypothetical file system
      // when subdirectories are used in the `src` directory.
      allowRealFiles: true,

      // A list of IDs of modules that should remain external to the bundle
      // See "external" in https://rollupjs.org/#core-functionality
      external: [
        '@angular/core',
        '@angular/common',
        'rxjs'
      ],
      output: {
        // Format of generated bundle
        // See "format" in https://rollupjs.org/#core-functionality
        format: 'umd',

        // Export mode to use
        // See "exports" in https://rollupjs.org/#danger-zone
        exports: 'named',

        // The name to use for the module for UMD/IIFE bundles
        // (required for bundles with exports)
        // See "name" in https://rollupjs.org/#core-functionality
        name: 'ng4-loading-spinner',

        // See "globals" in https://rollupjs.org/#core-functionality
        globals: {
          typescript: 'ts',
          rxjs: 'rxjs',
          '@angular/core': '@angular/core'
        }
      }

    }))
    .pipe(rename('ng4-loading-spinner.umd.js'))
    .pipe(gulp.dest(distFolder));
}

/**
 * 7. Copy all the files from /build to /dist, except .js files. We ignore all .js from /build
 *    because with don't need individual modules anymore, just the Flat ES module generated
 *    on step 5.
 */
function copy_build() {
  return gulp.src([`${buildFolder}/**/*`, `!${buildFolder}/**/*.js`])
    .pipe(gulp.dest(distFolder));
}

/**
 * 8. Copy package.json from /src to /dist
 */
function copy_manifest() {
  return gulp.src([`${srcFolder}/package.json`])
    .pipe(gulp.dest(distFolder));
}

/**
 * 9. Copy README.md from / to /dist
 */
function copy_readme() {
  return gulp.src([path.join(rootFolder, 'README.MD')])
    .pipe(gulp.dest(distFolder));
}

/**
 * 10. Delete /.tmp folder
 */
function clean_tmp() {
  return deleteFolders([tmpFolder]);
}

/**
 * 11. Delete /build folder
 */
function clean_build() {
  return deleteFolders([buildFolder]);
}

/**
 * Watch for any change in the /src folder and compile files
 */
function watch() {
  return gulp.watch(`${srcFolder}/**/*`, ['compile']);
}

/**
 * Deletes the specified folder
 */
function deleteFolders(folders) {
  return del(folders);
}

/**
 * Define complex tasks
 */
const compile = gulp.series(
  clean_dist,
  copy_source,
  inline_resources,
  ngcompiler,
  rollup_fesm,
  rollup_umd,
  copy_build,
  copy_manifest,
  copy_readme,
  clean_build,
  clean_tmp,
);

/**
 * Export tasks
 */
const clean = gulp.series(clean_dist, clean_tmp, clean_build);
const build = gulp.series(clean, compile);
const build_watch = gulp.series(build, watch);

exports.clean = clean;
exports.build = build;
exports.default = build_watch;
