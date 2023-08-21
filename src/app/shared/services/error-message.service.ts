import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  getErrorMessageName(userName: string) {
    if (userName === null || userName === '') {
      return 'This field is required';
    } else if (userName.length < 2) {
      return 'Length must be more than 2 characters';
    } else {
      return '';
    }
  }

  getErrorMessagePassword(userPassword: string) {
    if (userPassword === null || userPassword === '') {
      return 'This field is required';
    } else if (userPassword.length < 6) {
      return 'Password must be at least 6 characters long';
    } else if (userPassword.length > 20) {
      return 'Password cannot exceed 20 characters';
    } else if (!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).*$/.test(userPassword)) {
      return 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    } else {
      return '';
    }
  }

}
