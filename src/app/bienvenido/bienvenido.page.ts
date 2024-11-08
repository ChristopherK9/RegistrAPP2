import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { AuthService } from '../common/services/auth.service';
import { ApiService} from '../common/services/api.service';
@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.page.html',
  styleUrls: ['./bienvenido.page.scss'],
})
export class BienvenidoPage implements OnInit {
  username: string = '';
  photos: any[] = [];
  constructor(
    private router: Router,
    private dataService: DataService,
    private authService: AuthService,
    private apiService: ApiService
) { }

  ngOnInit() {
    this.apiService.getPhotos().subscribe(
      (data) => {
        this.photos = data.slice(0, 10); // Obtén solo las primeras 10 fotos (opcional)
      },
      (error) => {
        console.error('Error al obtener las fotos:', error);
      }
    );

    this.username = this.dataService.asignarNombre();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  goRoute() {
    this.router.navigate(['/apirestt']);
  }

}
