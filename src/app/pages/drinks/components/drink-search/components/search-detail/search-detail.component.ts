import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { RequestService } from './../../../../services/request.service';
import { DrinkApiResponse } from 'src/app/models/drink.model';
import { Drink } from 'src/app/models/drink.model';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss']
})
export class SearchDetailComponent {
  public drinkId:string = "";
  public drinkItems: Drink[]=[];
  public ingredients:string="";

  constructor (

    private activatedRoute: ActivatedRoute,
    private RequestService:RequestService
    ) {}


    ngOnInit():void{
      this.activatedRoute.paramMap.subscribe((params) => {
        this.drinkId = params.get('drinkId') as string;
      });
      this.activatedRoute.queryParamMap.subscribe((queryParams) => {
        console.log(queryParams);
      })
      this.getDrinksDetails();
    }


    private getDrinksDetails(): void {
      this.RequestService.getDetails(this.drinkId).subscribe(
        (response:DrinkApiResponse) => {
          this.drinkItems = response.drinks;
          console.log(this.drinkItems)
        })
    }


}


