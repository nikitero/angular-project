import { RequestService } from '../../../../services/request.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkApiResponse } from '../../../../../../models/drink.model';
import { Drink } from '../../../../../../models/drink.model';


@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent {
 public drinkId:string ='';
 public detailedDrink: Drink[] =[]

  constructor (
    private activatedRoute: ActivatedRoute,
    private RequestService: RequestService
    ) {}

  ngOnInit():void{
//Create the route for the drink id
    this.activatedRoute.paramMap.subscribe((params) => {
      this.drinkId = params.get('drinkId') as string;
    });
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      console.log(queryParams);
    })
      this.getDrinksDetails();
  }

//Calling the detail. Passing drinkId in the getDetails parameter.
  private getDrinksDetails(): void {
    console.log('hola');
    this.RequestService.getDetails(this.drinkId).subscribe(
      (response:DrinkApiResponse) => {
        this.detailedDrink = response.drinks;
        console.log(this.detailedDrink)
      })
  }

}







