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
      <button (click)="testThis()">test</button>
      <edit-food [childSelectedFood]="selectedFood" (doneButtonClickedSender)="finishedEditing()"></edit-food>
      <new-food (newFoodSender)="addFood($event)"></new-food>
    </div>
  </div>
  `
})

export class AppComponent {
  masterFoodList: Food[] = [
    new Food('Cheeseburger', 'Burgers need cheese.', 520, ''),
    new Food('Mac and Cheese', 'Could\'ve used more cheese.', 600, ''),
    new Food('New England Clam Chowder', 'Could\'ve used cheese.', 400, '1/09/2017'),
    new Food('Cheese Pizza', 'Not quite cheesy enough.', 700, '1/11/2017'),
    new Food('Grilled Cheese Sandwich', 'Good cheese.', 450, '1/10/2017')
  ].sort(this.sortFunction);
  selectedFood: Food = null;

  testList: Food[] = [];

  sortByDate(a,b){
    var dateA = a.dateEaten.getTime();
    var dateB = b.dateEaten.getTime();
    return dateA > dateB ? 1 : -1;
  }

  addFood(foodToAdd: Food) {
    this.masterFoodList.push(foodToAdd);
    this.masterFoodList.sort(this.sortByDate);
  }

  editFood(clickedFood) {
    this.selectedFood = clickedFood;
  }

  finishedEditing() {
    this.selectedFood = null;
  }
}
