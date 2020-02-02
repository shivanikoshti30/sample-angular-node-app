import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    registerForm: FormGroup;
    fullName = '';
    username = '';
    password = '';

    constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username : [null, Validators.required],
            password : [null, Validators.required]
          });
    }

    onFormSubmit(form: NgForm) {
        this.authService.register(form)
          .subscribe(res => {
                if(res.success == true){
                    alert("Successfully registered, please login to continue.");
                    this.router.navigate(['auth']);
                }else{
                    alert(res.msg)
                }
            
          }, (err) => {
            console.log(err);
            alert(err.error);
          });
      }
}
