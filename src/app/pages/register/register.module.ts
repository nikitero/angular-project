import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormComponent } from './form/form.component';
//Forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//Angular Material
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    RegisterComponent,
    FormComponent

  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //Angular Material
    MatButtonModule
  ]
})
export class RegisterModule { }
