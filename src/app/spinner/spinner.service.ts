import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';

/**
 * Injectable service
 * @export
 * @class SpinnerService
 */
@Injectable()
export class SpinnerService {
    /**
     * Spinner observer
     * @private
     * @type {Observer<any>}
     * @memberof SpinnerService
     */
    private spinnerObserver: Observer<any>;
    /**
     * Spinner observable
     * @type {Observable<any>}
     * @memberof SpinnerService
     */
    public spinnerObservable: Observable<any>;
    /**
     * Creates an instance of SpinnerService.
     * @memberof SpinnerService
     */
    constructor() {
        this.spinnerObservable = new Observable(observer => {
            this.spinnerObserver = observer;
        }
        ).share();
    }
    /**
     * To show spinner
     * @memberof SpinnerService
     */
    show() {                
        if (this.spinnerObserver) {
            this.spinnerObserver.next(true);
        }
    }
    /**
     * To hide spinner
     * @memberof SpinnerService
     */
    hide() {
        if (this.spinnerObserver) {
            this.spinnerObserver.next(false);
        }
    }
}
