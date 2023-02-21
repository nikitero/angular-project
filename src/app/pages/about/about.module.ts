import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AboutRoutingModule } from './about-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about.component';

//Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

//Bootstrap
import { AccordionModule } from 'ngx-bootstrap/accordion';



@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
  ],

  imports: [
    CommonModule,
    AboutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //Angular Material
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    //Bootstrap
    AccordionModule
  ]
})
export class AboutModule { }
