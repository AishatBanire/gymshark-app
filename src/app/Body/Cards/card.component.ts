import { mock_cards } from "./mock-cards";
import { Component } from "@angular/core";
import { NewReleaseCardsModel } from "./NewReleaseCards.model";

@Component({
  selector: "gymshark-card",
  templateUrl:"card.component.html"
})
export class CardComponent{
  products:NewReleaseCardsModel[]=[];

  constructor(){
for (var products of mock_cards){
  this.products.push( new NewReleaseCardsModel(products));
}

  }
}

