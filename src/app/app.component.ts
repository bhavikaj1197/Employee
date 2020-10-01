import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  errormess = true;
  loginForm: FormGroup;
  passwordIcon: boolean;
  employee: boolean = true;
  constructor(private toastr: ToastrService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('',  Validators.required)
    })
  }

  
  togglePasswordVisibility() {

    if (this.passwordIcon === true) {
      this.passwordIcon = false;
    }
    else {
      this.passwordIcon = true;
    }
  }

  onSubmit() {
    if(this.loginForm.value.username == "admin" && this.loginForm.value.password == "admin") {
      //this.toastr.success("Sign Up successfully!")
      this.router.navigate(['employee']);
      this.employee = false;
    }

  }
}
