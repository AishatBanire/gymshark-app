import { mock_cards } from "./mock-cards";
import { Component } from "@angular/core";
import { NewReleaseCards } from "./NewReleaseCards.model";

@Component({
  selector: "gymshark-card",
  templateUrl:"card.component.html"
})
export class CardComponent{
  newreleasecards:NewReleaseCards[]=[];

  constructor(){
for (var newReleaseCards of mock_cards){
  this.newreleasecards.push( new NewReleaseCards(newReleaseCards));
}

  }
}

