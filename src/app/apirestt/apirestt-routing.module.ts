import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiresttPage } from './apirestt.page';

const routes: Routes = [
  {
    path: '',
    component: ApiresttPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiresttPageRoutingModule {}
