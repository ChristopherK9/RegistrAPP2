import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiresttPageRoutingModule } from './apirestt-routing.module';

import { ApiresttPage } from './apirestt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ApiresttPageRoutingModule
  ],
  declarations: [ApiresttPage]
})
export class ApiresttPageModule {}
