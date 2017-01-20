import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <button (click)="showAddForm()">Add a Keg</button>
    <food-list [childFoodList]="masterFoodList"></food-list>
    <hr>
    <div>
      <div *ngIf = "selectedKeg">
        <h3>Edit Keg: {{selectedKeg.name}}</h3>
        <label>Keg Name:</label>
        <input [(ngModel)]="selectedKeg.name"><br>
        <label>Keg Brand:</label>
        <input [(ngModel)]="selectedKeg.brand"><br>
        <label>Keg Price(in cents):</label>
        <input [(ngModel)]="selectedKeg.price" type="number"><br>
        <label>Keg Alcohol Content(in percent):</label>
        <input [(ngModel)]="selectedKeg.alcoholContent" type="number"><br>
        <button (click)="finishedEditing()">Done</button>
      </div>
      <div *ngIf = "newKeg">
        <h3>Add a Keg</h3>
        <label>Keg Name:</label>
        <input [(ngModel)]="newKeg.name"><br>
        <label>Keg Brand:</label>
        <input [(ngModel)]="newKeg.brand"><br>
        <label>Keg Price(in cents):</label>
        <input [(ngModel)]="newKeg.price" type="number"><br>
        <label>Keg Alcohol Content(in percent):</label>
        <input [(ngModel)]="newKeg.alcoholContent" type="number"><br>
        <button (click)="addKeg()">Add this keg</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {

  masterFoodList: Food[] = [
    new Food('Cheeseburger', 'Burgers need cheese.', 520),
    new Food('Mac and Cheese', 'Could\'ve used more cheese', 600),
    new Food('New England Clam Chowder', 'Could\'ve used cheese', 400)
  ];
  selectedFood = null;
  newFood = null;

  // addKeg() {
  //   this.kegs.push(this.newKeg);
  //   this.newKeg = null;
  // }

  // editKeg(clickedKeg) {
  //   this.selectedKeg = clickedKeg;
  // }
  //
  // finishedEditing() {
  //   this.selectedKeg = null;
  // }

  // showAddForm() {
  //   this.newKeg = new Keg('', '', 0, 0);
  // }
}
