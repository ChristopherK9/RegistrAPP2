import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }


  setLogin(status: boolean) {
    this.isLogin = status;
  }


  async registerUser(email: string, password: string) {
    const user = { email, password };
    await this.storage.set(email, user);  // Guarda el usuario con el email como clave
    return user;
  }

  async loginUser(email: string, password: string) {
    const user = await this.storage.get(email);
    if (user && user.password === password) {
      await this.storage.set('isLoggedIn', true);
      await this.storage.set('currentUser', user);
      
      return user;
    } else {
      throw new Error('Credenciales inválidas');
    }
  }

  async logout() {
    await this.storage.set('isLoggedIn', false);
    this.isLogin = false;
    await this.storage.remove('currentUser');
  }
}