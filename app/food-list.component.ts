import { Component } from '@angular/core';
import { Keg } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of kegs" [class]="whichColorCode(currentKeg)">Name: {{currentKeg.name}}, Brand: {{currentKeg.brand}}, Price: {{currentKeg.getPrice()}}, Alcohol Content: {{currentKeg.alcoholContent}}%, <span [class]="pintsLow(currentKeg)">Pints Left: {{currentKeg.pintsLeft}}</span> <button (click)="editKeg(currentKeg)">Edit!</button><button (click) = "currentKeg.decrementPint()">Take a Pint</button></li>
  </ul>
  `
})

export class FoodListComponent {
  kegs: Keg[] = [
    new Keg('Moo1', 'Moocows', 399, 20),
    new Keg('Moo2', 'Moocows', 699, 60),
    new Keg('Moo3', 'Moocows', 99, 1)
  ];

  colorCode: string = "none";

  pintsLow(lowKeg) {
    if(lowKeg.pintsLeft <= 10) {
      return "red";
    }
  }

  whichColorCode(selectedKeg) {
    if(this.colorCode === "price") {
      if(selectedKeg.price >= 500) {
        return "bg-danger";
      } else {
        return "bg-warning";
      }
    }
    else if(this.colorCode === "alcohol") {
      if(selectedKeg.alcoholContent >= 40) {
        return "bg-danger";
      } else if(selectedKeg.alcoholContent >= 20) {
        return "bg-warning";
      } else {
        return "bg-info";
      }
    }
  }
}
