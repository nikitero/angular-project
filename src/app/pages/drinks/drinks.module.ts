import { SharedModule } from '../../shared/shared.module';
import { RequestService } from './services/request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrinksRoutingModule } from './drinks-routing.module';
import { DrinkDetailsComponent } from './components/drink-list/components/drink-details/drink-details.component';
import { DrinksComponent } from './drinks.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkSearchComponent } from './components/drink-search/drink-search.component';
import { SearchDetailComponent } from './components/drink-search/components/search-detail/search-detail.component';

//Angular Material
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
//NGX pagination
import { NgxPaginationModule } from 'ngx-pagination';





@NgModule({
  declarations: [
    DrinkDetailsComponent,
    DrinksComponent,
    DrinkListComponent,
    DrinkSearchComponent,
    SearchDetailComponent
  ],
  imports: [
    CommonModule,
    DrinksRoutingModule,
    HttpClientModule,
    SharedModule,

    //Angular Material
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,


  ],
  providers:[RequestService]
})
export class DrinksModule { }
