import { Component } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div class="separator"></div>
  <li *ngFor="let currentFood of foods">Name: {{currentFood.name}}
  <li>Details: {{currentFood.details}}</li>
  <li>Calories: {{currentFood.calories}}</li>
  <button (click)="editFood(currentFood)">Edit!</button></li>
  <div class="separator"></div>
  `
})

export class FoodListComponent {
  foods: Food[] = [
    new Food('Cheeseburger', 'Burgers need cheese.', 520),
    new Food('Mac and Cheese', 'Could\'ve used more cheese', 600),
    new Food('New England Clam Chowder', 'Could\'ve used cheese', 400)
  ];
}
