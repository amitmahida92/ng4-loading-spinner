import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './spinner/spinner.service';

export function spinnerServiceFactory() {
  return new SpinnerService();
}

/**
 * 
 * @export
 * @class Ng4LoadingSpinner
 */
@NgModule({
  declarations: [
    SpinnerComponent
  ],
  entryComponents: [SpinnerComponent],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: SpinnerService, useFactory: spinnerServiceFactory }
  ],
  exports: [SpinnerComponent]
})

export class Ng4LoadingSpinner { 

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng4LoadingSpinner,
      providers: [
        SpinnerService
      ]
    };
  }  
}
