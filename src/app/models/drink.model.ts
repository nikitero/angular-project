export interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory:string;
  strGlass:string;
  strAlcoholic:string;
  strIngredient1:string;
  strIngredient2:string;
  strIngredient3:string;
  strIngredient4:string;
  strIngredient5:string;
  strIngredient6:string;
  strIngredient7:string;
  strIngredient8:string;
  strIngredient9:string;
  strIngredient10:string;
  strIngredient11:string;
  strIngredient12:string;
  strIngredient13:string;
  strIngredient14:string;
  strIngredient15:string;
  strInstructions:string;
}


export interface DrinkApiResponse {
  drinks: Drink[];
  ingredients: Drink[];
}
