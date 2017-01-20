import { Component, Input } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFoodList">
    <div class="separator"></div>
    <li>Name: {{currentFood.name}}</li>
    <li>Details: {{currentFood.details}}</li>
    <li>Calories: {{currentFood.calories}}</li>
    <button (click)="editFood(currentFood)">Edit!</button>
    <div class="separator"></div>
  </div>
  `
})

export class FoodListComponent {
  @Input () childFoodList: Food [];
}
