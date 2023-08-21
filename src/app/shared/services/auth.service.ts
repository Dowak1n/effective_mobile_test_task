import { Injectable } from '@angular/core';
import { UserSessionManager } from './user-session.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {
    constructor(private userSession: UserSessionManager) {}

    login(userLogin: string, password: string, next: () => void) {
        if (localStorage.getItem(userLogin) === password) {
           this.userSession.startSession();
           next();
        }
    }

    signUp(userLogin: string, password: string, next: (result: boolean) => void) {
        if (localStorage.getItem(userLogin)) {
          next(false);
          return;
        }

        localStorage.setItem(userLogin, password)
        this.userSession.startSession();
        next(true);
    }

    logout() {
        this.userSession.closeSession();
    }
}