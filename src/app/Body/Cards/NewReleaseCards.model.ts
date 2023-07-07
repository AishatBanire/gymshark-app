import { NewReleaseCardsComponent } from './new-release-cards.component';
import { CardComponent } from './card.component';

export class NewReleaseCardsModel {

  title: string;
  secondaryTitle:string;
  color: string;
  price: string;
  imagePath: string;

  constructor ({ title, secondaryTitle, color, price, imagePath} :

{title: string, secondaryTitle:string, color: string, price: string, imagePath: string}){
this.title = title;
  this.secondaryTitle = secondaryTitle;
  this.color = color;
  this.price = price;
  this.imagePath = imagePath;
}
}
