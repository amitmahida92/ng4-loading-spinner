import { Component, OnInit, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
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
  styleUrls: ['./ng4LoadingSpinner.component.css'],
  inputs: ['template', 'loadingText'],
  encapsulation: ViewEncapsulation.Native  // Use the native Shadow DOM to encapsulate our CSS
})
export class Ng4LoadingSpinnerComponent implements OnInit, OnDestroy {

  _template: String = `
  <div style="color: #64d6e2" class="la-ball-clip-rotate-multiple la-3x">
    <div></div>
    <div></div>
    <div></div>
  </div>`;
  _loadingText: String = '';

  @Input()
  public set template(value: String) {
    this._template = value;
  }

  public get template(): String {
    return this._template;
  }

  @Input()
  public set loadingText(value: String) {
    this._loadingText = value;
  }

  public get loadingText(): String {
    return this._loadingText;
  }

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

