import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-apirestt',
  templateUrl: './apirestt.page.html',
  styleUrls: ['./apirestt.page.scss'],
})
export class ApiresttPage implements OnInit {

  photos: any[] = []; // Variable para almacenar las fotos

  constructor(private apiService: ApiService, 
    private router: Router
  ) {}

  ngOnInit() {
    // Llamar al servicio para obtener las fotos
    this.apiService.getPhotos().subscribe(
      (data) => {
        this.photos = data.slice(0, 10); // Obtén solo las primeras 10 fotos (opcional)
      },
      (error) => {
        console.error('Error al obtener las fotos:', error);
      }
    );
  }

  goHome() {
    this.router.navigate(['/bienvenido']);
  }

}
