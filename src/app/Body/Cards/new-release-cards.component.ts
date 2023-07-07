
import { Component, Input, OnInit } from "@angular/core";
import { NewReleaseCardsModel } from "./NewReleaseCards.model";
import { CardService } from "./card.service";
import { mock_cards } from "./mock-cards";

@Component({
  selector: "gymshark-new-release-cards",
  templateUrl:"new-release-cards.component.html"
})
export class NewReleaseCardsComponent implements OnInit{
cards: NewReleaseCardsModel[]=[];
title: any;
secondaryTitle: any;
color: any;
price: any;
imagePath: any;
  constructor(private cardService:CardService){

  }


ngOnInit(): void{
 this.cardService.getProducts().subscribe((data: NewReleaseCardsModel []) => {
  console.log("fetching data");
  for (var product of data){
      console.log(product);
      this.cards.push(product);
  }
 });


}

}
