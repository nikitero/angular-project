import { Component } from '@angular/core';
import { Drink } from '../../../../models/drink.model';
import { DrinkApiResponse } from '../../../../models/drink.model';
import { RequestService } from '../../services/request.service';


@Component({
  selector: 'app-drink-search',
  templateUrl: './drink-search.component.html',
  styleUrls: ['./drink-search.component.scss']
})
export class DrinkSearchComponent {
  drinkItems: Drink[] = [];
  isLoading: boolean = false;
  capturedEvent!:Event;
  showImage: boolean = true;
  showErrorMessage:boolean = false;

  constructor (
    private requestService:RequestService,
    ) {}

  ngOnInit():void{
    this.getDrinks(event)
}

  public getDrinks(event:any):void{
    this.capturedEvent = event.target.value;
  }

  public findDrinks(newState:boolean): void {
    this.isLoading = true;
    console.log(this.capturedEvent);
    this.requestService.searchDrinks(this.capturedEvent).subscribe((response: DrinkApiResponse)=>{
      this.drinkItems = response.drinks;
      this.isLoading = false;
      console.log(this.drinkItems);
      this.showImage = newState;
    });
  }

  public getBack(newState:boolean): void{
    setTimeout(() => {
      this.showErrorMessage = newState;
    }, 2000);
  }


}
