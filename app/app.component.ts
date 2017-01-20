import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <food-list [childFoodList]="masterFoodList" (clickSender)="editFood($event)"></food-list>
    <hr>
    <div>
      <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
      <new-food (newFoodSender)="addFood($event)"></new-food>
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
  selectedFood: Food = null;

  addFood(foodToAdd: Food) {
    this.masterFoodList.push(foodToAdd);
  }

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
}
