import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from 'src/app/authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent   {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthenticationService) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      alert('Please fill in all fields correctly.');
      return;
    }

    const { name, email, password, confirmPassword } = this.signupForm.value;

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    this.authService.signup(name, email, password);
  }
}