
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Ng4LoadingSpinnerService } from './ng4LoadingSpinner.service';
import { Ng4LoadingSpinnerComponent } from './ng4LoadingSpinner.component';

export * from './ng4LoadingSpinner.service';
export * from './ng4LoadingSpinner.component';

@NgModule({
  imports: [],
  declarations: [Ng4LoadingSpinnerComponent],
  exports: [Ng4LoadingSpinnerComponent],
  providers: [Ng4LoadingSpinnerService]
})
export class Ng4LoadingSpinnerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng4LoadingSpinnerModule,
      providers: [Ng4LoadingSpinnerService]
    };
  }
}
