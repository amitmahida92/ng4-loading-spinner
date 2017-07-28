import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Subscription } from 'rxjs/Subscription';

/**
 * Component
 * @export
 * @class SpinnerComponent
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {
  /**
   * Subscription
   * @type {Subscription}
   * @memberof SpinnerComponent
   */
  subscription: Subscription;
  /**
   * Enable/Disable spinner
   * @memberof SpinnerComponent
   */
  showSpinner = true;
  /**
   * Constructor
   * @param {SpinnerService} spinnerService Spinner Service
   * @memberof SpinnerComponent
   */
  constructor(
    private spinnerService: SpinnerService
  ) { }
  /**
   * Init function
   * @memberof SpinnerComponent
   */
  ngOnInit() {
    this.createServiceSubscription();
  }
  /**
   * Destroy function
   * @memberof SpinnerComponent
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * Create service subscription
   * @memberof SpinnerComponent
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
