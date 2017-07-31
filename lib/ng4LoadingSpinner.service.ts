import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/share';

/**
 * Injectable service
 * @export
 * @class Ng4LoadingSpinnerService
 */
@Injectable()
export class Ng4LoadingSpinnerService {
    /**
     * Spinner observer
     * @private
     * @type {Observer<any>}
     * @memberof Ng4LoadingSpinnerService
     */
    private spinnerObserver: Observer<any>;
    /**
     * Spinner observable
     * @type {Observable<any>}
     * @memberof Ng4LoadingSpinnerService
     */
    public spinnerObservable: Observable<any>;
    /**
     * Creates an instance of Ng4LoadingSpinnerService.
     * @memberof Ng4LoadingSpinnerService
     */
    constructor() {
        this.spinnerObservable = new Observable(observer => {
            this.spinnerObserver = observer;
        }
        ).share();
    }
    /**
     * To show spinner
     * @memberof Ng4LoadingSpinnerService
     */
    show() {                
        if (this.spinnerObserver) {
            this.spinnerObserver.next(true);
        }
    }
    /**
     * To hide spinner
     * @memberof Ng4LoadingSpinnerService
     */
    hide() {
        if (this.spinnerObserver) {
            this.spinnerObserver.next(false);
        }
    }
}
