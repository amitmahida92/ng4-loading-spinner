import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  entryComponents: [SpinnerComponent],
  imports: [
    BrowserModule
  ],
  providers: [SpinnerService],
  bootstrap: [AppComponent]
})
export class Ng4LoadingSpinner {
  static injector: Injector;

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng4LoadingSpinner,
      providers: [
        SpinnerService
      ]
    };
  }
  constructor(injector: Injector) {
    Ng4LoadingSpinner.injector = injector;
  }

}
