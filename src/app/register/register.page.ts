import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../common/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onRegister() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      try {
        const user = await this.authService.registerUser(email, password);
        console.log('Usuario registrado:', user);
      } catch (error) {
        console.error('Error en el registro:', error);
      }
    }
  }
}