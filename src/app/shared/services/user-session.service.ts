import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UserSessionManager {
    private _isLoggidIn: boolean;
    get isLoggidIn(): boolean {
        return this._isLoggidIn
    }

    startSession() {
        this._isLoggidIn = true;
        sessionStorage.setItem('SessionStatus', this._isLoggidIn.toString());
    }

    closeSession() {
        this._isLoggidIn = false;
        sessionStorage.setItem('SessionStatus', this._isLoggidIn.toString());
    }
}