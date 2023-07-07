import { Component, OnInit } from "@angular/core";
import { NewReleaseCardsModel } from "../Body/Cards/NewReleaseCards.model";

@Component({
  selector: "gymshark-login",
  templateUrl:"login.component.html"
})
export class LogInComponent implements OnInit{
postForm: any;

  constructor() {}

  ngOnInit(): void {

  }
logIn(info:NewReleaseCardsModel){
  console.log("invalid info");
  console.log(info);
}

}
