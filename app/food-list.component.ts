import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <h4>Filter by:</h4>
  <select (change)="onChange($event.target.value)">
  <option value="none" selected="selected">No Filter</option>
  <option value="light">Under 500 Calories</option>
  <option value="dense">Over 500 Calories</option>
  </select>

  <div *ngFor="let currentFood of childFoodList | calorieness:filterByDensity">
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
  filterByDensity: string = "none";

  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onChange(density)
  {
    this.filterByDensity = density;
  }
}
