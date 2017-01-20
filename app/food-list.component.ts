import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <div *ngFor="let currentFood of childFoodList">
    <div class="separator"></div>
    <li>Name: {{currentFood.name}}</li>
    <li>Details: {{currentFood.details}}</li>
    <li>Calories: {{currentFood.calories}}</li>
    <button (click)="editButtonClicked(currentFood)">Edit!</button>
    <div class="separator"></div>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food [];
  @Output() clickSender = new EventEmitter();

  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }
}
