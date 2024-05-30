import { Component, ElementRef, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  toastAlert = inject(ToastrService);
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  elementRef = inject(ElementRef);

  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit(): void {
    const value = this.form.getRawValue();
    this.authService.login(value.email, value.password).subscribe({
      next: () => {
        this.router.navigateByUrl('/');
      },
      error: () => {
        this.toastAlert.error('Email o Password incorrect', 'Login Error');
      },
    });
  }

  userA() {
    this.form.setValue({ email: 'admin@gmail.com', password: '111111' });
  }
  userB() {
    this.form.setValue({ email: 'empleado@gmail.com', password: '111111' });
  }
}
