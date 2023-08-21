import { Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {ErrorMessageService} from "../../shared/services/error-message.service";

@Component({
  selector: 'registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent {
  myForm : FormGroup;
  usedNameError: boolean = false;

  constructor(private router: Router, private errorMessageService: ErrorMessageService){
    this.myForm = new FormGroup({
      "userName": new FormControl("", [Validators.required, Validators.minLength(2)]),
      "userPassword": new FormControl("",[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).*$"),
      ])
    });
  }

  getErrorMessageName() {
    return this.errorMessageService.getErrorMessageName(this.myForm.get('userName')?.value);
  }

  getErrorMessagePassword() {
    return this.errorMessageService.getErrorMessagePassword(this.myForm.get('userPassword')?.value);
  }

  submit(){
    if (localStorage.getItem(this.myForm.value.userName)) {
      this.usedNameError = true;
  } else {
      localStorage.setItem(this.myForm.value.userName, this.myForm.value.userPassword);
      sessionStorage.setItem('SessionStatus', 'true');
      this.router.navigate(['posts'])
    }
  }

  protected readonly localStorage = localStorage;
}
