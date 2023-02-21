import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DrinksComponent } from '../drinks.component';
import { DrinkSearchComponent } from '../components/drink-search/drink-search.component';

//DataService (Servicio Orientado a peticiones a la API)



@Injectable({
  providedIn: 'root'
})
export class RequestService {
//Inyectamos las dependencias
  constructor(
    private httpClient: HttpClient,
    ) { }

  getDrinks():Observable<any> {
    return this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
  }

  getDetails(drinkId:string):Observable<any> {
    return this.httpClient.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
  }

  searchDrinks(capturedEvent:Event):Observable<any> {
    return this.httpClient.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${capturedEvent}`)
  }



}
