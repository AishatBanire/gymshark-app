import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NewReleaseCardsModel } from "./NewReleaseCards.model";

@Injectable(

  {providedIn:'root'}
)

export class CardService
{
  private baseURL:string = "https://gymshark-app-d3485-default-rtdb.firebaseio.com/";
  private productEndPoint: string = "product.json";

  constructor(private http:HttpClient){

  }

  getProducts(){
    return this.http.get<NewReleaseCardsModel []>(this.baseURL + this.productEndPoint);
  }

  getProduct(index:number){
    return this.http.get<NewReleaseCardsModel>(this.baseURL + 'products' + '/' + index + '.json');
  }
}
