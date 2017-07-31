import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Ng4LoadingSpinnerComponent } from './ng4LoadingSpinner.component';
import { Ng4LoadingSpinnerService } from './ng4LoadingSpinner.service';

@NgModule({
  imports: [ ],
  declarations: [Ng4LoadingSpinnerComponent],
  exports: [Ng4LoadingSpinnerComponent],
  providers: [Ng4LoadingSpinnerService]
})
export class Ng4LoadingSpinnerModule { }