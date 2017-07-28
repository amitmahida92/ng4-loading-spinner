# ng4-loading-spinner
Angular 4 custom async loading spinner.

## Note

*This is under maintenance for more configuration. Please use it after the note is removed.*

## Installation

    npm i ng4-loading-spinner --save

## Description 

    Custom loading spinner for Angular 2/4.
    You can override the css for your customized spinner.

## Usage 

1. Include `<app-spinner> </app-spinner>` to your root level component.

2. Import `SpinnerService` to the component where you want to show the spinner.

    `import { SpinnerService } from './spinner/spinner.service';`

3. Inject dependancy 

    `constructor(`
        `private spinnerService: SpinnerService`
    `) { }`

3. Use `this.spinnerService.show()` method to display the loading spinner.

4. Use `this.spinnerService.hide()` method to hide the loading spinner once the processing is done.

## Example

    this.spinnerService.show();     
    this.http.get(GLOBAL['CONFIG_URL'])
        .subscribe(data => {
            this.spinnerService.hide();
        });

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

