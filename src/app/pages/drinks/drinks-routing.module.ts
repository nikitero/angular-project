import { SearchDetailComponent } from './components/drink-search/components/search-detail/search-detail.component';
import { DrinkListComponent } from './components/drink-list/drink-list.component';
import { DrinkDetailsComponent } from './components/drink-list/components/drink-details/drink-details.component';
import { DrinksComponent } from './drinks.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkSearchComponent } from './components/drink-search/drink-search.component';

const routes: Routes = [
  {
    path: '',
    component: DrinksComponent,

  },
  {
    path: 'drink-search',
    component:DrinkSearchComponent,
  },
  {
    path: 'drink-search/details/:drinkId',
    component:SearchDetailComponent,
  },
  {
    path: 'drink-list',
    component:DrinkListComponent,
  },
  {
    path: 'drink-list/details/:drinkId',
    component:DrinkDetailsComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinksRoutingModule { }
