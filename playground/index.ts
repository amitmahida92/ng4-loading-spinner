/**
 * This is only for local test
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  styleUrls: ['./styles.css'],
  selector: 'app',
  template: `<ng4-loading-spinner [template]="template"  [threshold]="2000"></ng4-loading-spinner>`
})
class AppComponent {

  template = '<img class="custom-spinner-template" src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif"/>';
  constructor(
    private spinnerService: Ng4LoadingSpinnerService
  ) {

    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.show();
    }, 1000);
    setTimeout(() => {
      this.spinnerService.hide();
    }, 4000);
    setTimeout(() => {
      this.spinnerService.hide();
    }, 5000);
  }

}

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, Ng4LoadingSpinnerModule.forRoot()]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
