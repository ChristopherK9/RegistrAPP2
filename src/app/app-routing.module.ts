import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './common/guards/login.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'olvidar-contra',
    loadChildren: () => import('./olvidar-contra/olvidar-contra.module').then( m => m.OlvidarContraPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'apirestt',
    loadChildren: () => import('./apirestt/apirestt.module').then( m => m.ApiresttPageModule),
    
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
