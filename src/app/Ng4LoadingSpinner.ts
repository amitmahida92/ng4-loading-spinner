import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

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
  constructor(injector: Injector) {
    Ng4LoadingSpinner.injector = injector;
  }
}
