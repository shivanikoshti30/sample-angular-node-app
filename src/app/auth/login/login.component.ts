import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    username = '';
    password = '';

    constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private authService: AuthService
    ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'username' : [null, Validators.required],
            'password' : [null, Validators.required]
          });
    }

    onLoggedin(form: NgForm) {
        this.authService.login(form)
    .subscribe(res => {
      console.log(res);
      if (res.token) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
      }else{
          alert(res.msg);
      }
    }, (err) => {
      console.log(err);
    });
        
    }
}
