import { Component } from '@angular/core';
import { Drink } from '../../../../models/drink.model';
import { DrinkApiResponse } from '../../../../models/drink.model';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent {
  drinkList: Drink[] = [];
  limitedDrinkList:Drink[] = [];
  isLoading: boolean = false;

//Paginator
  p: number = 1;
  count: number = 12;

  constructor (private requestService:RequestService) {}

  ngOnInit():void{
      this.getDrinks()
  }

  private getDrinks(): void {
    this.isLoading = true;
    this.requestService.getDrinks().subscribe((response: DrinkApiResponse)=>{
      this.drinkList = response.drinks;
      this.limitedDrinkList = this.drinkList.slice(0,10);
      this.isLoading = false;
      console.log(this.drinkList);
    }, (error) => {
      console.log('Oops...something went wrong!')
    });
  }

}
