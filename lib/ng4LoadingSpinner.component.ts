import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ng4LoadingSpinnerService } from './ng4LoadingSpinner.service';
import { Subscription } from 'rxjs/Subscription';

/**
 * Component
 * @export
 * @class Ng4LoadingSpinnerComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './ng4LoadingSpinner.component.html',
  styleUrls: ['./ng4LoadingSpinner.component.css']
})
export class Ng4LoadingSpinnerComponent implements OnInit, OnDestroy {
  /**
   * Subscription
   * @type {Subscription}
   * @memberof Ng4LoadingSpinnerComponent
   */
  subscription: Subscription;
  /**
   * Enable/Disable spinner
   * @memberof Ng4LoadingSpinnerComponent
   */
  showSpinner = true;
  /**
   * Constructor
   * @param {Ng4LoadingSpinnerService} spinnerService Spinner Service
   * @memberof Ng4LoadingSpinnerComponent
   */
  constructor(
    private spinnerService: Ng4LoadingSpinnerService
  ) { }
  /**
   * Init function
   * @memberof Ng4LoadingSpinnerComponent
   */
  ngOnInit() {
    this.createServiceSubscription();
  }
  /**
   * Destroy function
   * @memberof Ng4LoadingSpinnerComponent
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * Create service subscription
   * @memberof Ng4LoadingSpinnerComponent
   */
  createServiceSubscription() {
    this.subscription =
      this.spinnerService.spinnerObservable.subscribe(show => {        
        if (show) {
          this.showSpinner = false;
        } else {
          const _thisNew = this;
          setTimeout(function () {
            _thisNew.showSpinner = true;
          }, 1000);
        }
      });
  }
}

