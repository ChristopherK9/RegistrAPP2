import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../common/services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  loginForm: FormGroup;
  username: string = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router,
    private dataService: DataService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        const user = await this.authService.loginUser(email, password);
        console.log('Sesión iniciada:', user);
        this.authService.setLogin(true);
        this.dataService.obtenerNombre(this.username);
        this.router.navigateByUrl('/bienvenido');
      } catch (error) {
        this.showErrorAlert(error);
      }
    }
  }

  async showErrorAlert(error: any) {
    const alert = await this.alertController.create({
      header: 'Error en el inicio de sesión',
      message: error.message || 'Ocurrió un error inesperado. Intenta de nuevo.',
      buttons: ['OK']
    });

    await alert.present();
  }
}