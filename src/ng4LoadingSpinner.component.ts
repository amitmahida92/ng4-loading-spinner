import { Component, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
import { Ng4LoadingSpinnerService } from './ng4LoadingSpinner.service';
import { Subscription } from 'rxjs/Subscription';

/**
 * @description 
 * @author Amit Mahida
 * @export
 * @class Ng4LoadingSpinnerComponent
 * @implements {OnDestroy}
 */
@Component({
  selector: 'ng4-loading-spinner',
  templateUrl: './ng4LoadingSpinner.component.html',
  styleUrls: ['./ng4LoadingSpinner.component.css'],
  inputs: ['template', 'loadingText', 'zIndex'],
  encapsulation: ViewEncapsulation.None  // Use the native Shadow DOM to encapsulate our CSS
})
export class Ng4LoadingSpinnerComponent implements OnDestroy {

  /**
   * @description Default loading spinner template
   * @type {string}
   * @memberof Ng4LoadingSpinnerComponent
   */
  _template: string = `
  <div style="color: #64d6e2" class="la-ball-clip-rotate-multiple la-3x">
    <div></div>
    <div></div>
    <div></div>
  </div>`;

  /**
   * @description Loading text
   * @type {string}
   * @memberof Ng4LoadingSpinnerComponent
   */
  _loadingText: string = '';


  /**
   * @description Defines threhold for not to diplay if time is less than 500ms
   * @type {number}
   * @memberof Ng4LoadingSpinnerComponent
   */
  _threshold: number = 500;

  /**
   * @description Defines z-index property of the loading text
   * @type {number}
   * @memberof Ng4LoadingSpinnerComponent
   */
  _zIndex: number = 9999;

  /**
   * @description Sets z-index for input text
   * @memberof Ng4LoadingSpinnerComponent
   */
  @Input()
  public set zIndex(value: number) {
    this._zIndex = value;
  }

  /**
   * @description returns z-index for input text 
   * @readonly
   * @type {number}
   * @memberof Ng4LoadingSpinnerComponent
   */
  public get zIndex(): number {
    return this._zIndex;
  }

  /**
   * @description Accepts custom template
   * @memberof Ng4LoadingSpinnerComponent
   */
  @Input()
  public set template(value: string) {
    this._template = value;
  }


  /**
   * @description Gives the current template
   * @readonly
   * @type {string}
   * @memberof Ng4LoadingSpinnerComponent
   */
  public get template(): string {
    return this._template;
  }


  /**
   * @description Accepts loading text string
   * @memberof Ng4LoadingSpinnerComponent
   */
  @Input()
  public set loadingText(value: string) {
    this._loadingText = value;
  }


  /**
   * @description Gives loading text
   * @readonly
   * @type {string}
   * @memberof Ng4LoadingSpinnerComponent
   */
  public get loadingText(): string {
    return this._loadingText;
  }


  /**
   * @description Accepts external threshold
   * @memberof Ng4LoadingSpinnerComponent
   */
  @Input()
  public set threshold(value: number) {
    this._threshold = value;
  }


  /**
   * @description 
   * @readonly
   * @type {number}
   * @memberof Ng4LoadingSpinnerComponent
   */
  public get threshold(): number {
    return this._threshold;
  }

  /**
   * Subscription
   * @type {Subscription}
   * @memberof Ng4LoadingSpinnerComponent
   */
  subscription: Subscription;

  /**
   * @description Show/hide spinner
   * @memberof Ng4LoadingSpinnerComponent
   */
  showSpinner = false;

  /**
   * Constructor
   * @param {Ng4LoadingSpinnerService} spinnerService Spinner Service
   * @memberof Ng4LoadingSpinnerComponent
   */
  constructor(
    private spinnerService: Ng4LoadingSpinnerService
  ) {
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
    let timer: any;

    this.subscription =
      this.spinnerService.getMessage().subscribe(show => {
        if (show) {
          timer = setTimeout(function () {
            this.showSpinner = show;
          }.bind(this), this.threshold);
        } else {
          clearTimeout(timer);
          this.showSpinner = false;
        }
      });
  }
}

