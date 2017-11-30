import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

/**
 * Injectable service
 * @export
 * @class Ng4LoadingSpinnerService
 */
@Injectable()
export class Ng4LoadingSpinnerService {

    /**
     * @description spinners BehaviorSubject
     * @type {BehaviorSubject<any>}
     * @memberof Ng4LoadingSpinnerService
     */
    public spinnerSubject: BehaviorSubject<any> = new BehaviorSubject<any>(false);

    /**
     * Creates an instance of Ng4LoadingSpinnerService.
     * @memberof Ng4LoadingSpinnerService
     */
    constructor() {

    }

    /**
     * To show spinner
     * @memberof Ng4LoadingSpinnerService
     */
    show() {
        this.spinnerSubject.next(true);
    }

    /**
     * To hide spinner
     * @memberof Ng4LoadingSpinnerService
     */
    hide() {
        this.spinnerSubject.next(false);
    }

    getMessage(): Observable<any> {
        return this.spinnerSubject.asObservable();
    }
}
