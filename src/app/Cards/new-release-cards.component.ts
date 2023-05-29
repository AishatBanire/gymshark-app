import { mock_cards } from "./mock-cards";
import { Component, Input } from "@angular/core";
import { NewReleaseCards } from "./NewReleaseCards.model";

@Component({
  selector: "gymshark-new-release-cards",
  templateUrl:"new-release-cards.component.html"
})
export class NewReleaseCardsComponent{
   @Input()
   title!: string;
}

