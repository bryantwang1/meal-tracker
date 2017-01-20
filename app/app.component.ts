import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <button (click)="showAddForm()">Add a Keg</button>
    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
    <hr>
    <div>
      <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
      <div *ngIf = "newFood">
        <h3>Add a Food</h3>
        <label>Food Name:</label>
        <input [(ngModel)]="newFood.name"><br>
        <label>Food Brand:</label>
        <input [(ngModel)]="newFood.brand"><br>
        <label>Food Price(in cents):</label>
        <input [(ngModel)]="newFood.price" type="number"><br>
        <button (click)="addFood()">Add this keg</button>
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

  // addFood() {
  //   this.kegs.push(this.newFood);
  //   this.newFood = null;
  // }

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }

  // showAddForm() {
  //   this.newFood = new Food('', '', 0, 0);
  // }
}
