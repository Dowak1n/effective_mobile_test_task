import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {
  getErrorMessageName(userName: string) {
    if (userName === null || userName === '') {
      return 'this field is required';
    } else if (userName.length < 2) {
      return 'length must be more than 2 characters';
    } else {
      return '';
    }
  }

  getErrorMessagePassword(userPassword: string) {
    if (userPassword === null || userPassword === '') {
      return 'this field is required';
    } else if (userPassword.length < 6) {
      return 'password must be at least 6 characters long';
    } else if (userPassword.length > 20) {
      return 'password cannot exceed 20 characters';
    } else if (!/(?=.*?[A-Z])/.test(userPassword)) {
      return 'capital letters are required';
    } else if (!/(?=.*?[a-z])/.test(userPassword)) {
      return 'lowercase letters are required';
    } else if (!/(?=.*?[0-9])/.test(userPassword)) {
      return 'numbers are required';
    } else {
      return '';
    }
  }
}
