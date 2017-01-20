import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  template: `
  <button *ngIf="dontSeparateByDay" (click)="separateByDays()">Click here to separate entries by day</button>
  <button *ngIf="!dontSeparateByDay" (click)="separateByDays()">Refresh</button>
  <button *ngIf="!dontSeparateByDay" (click)="returnDefault()">Return to normal view</button>
  <p *ngIf="!dontSeparateByDay">The list won't update if you add more foods until you click one of the above buttons.</p>
  <h4>Filter by:</h4>
  <select (change)="onChange($event.target.value)">
  <option value="none" selected="selected">No Filter</option>
  <option value="light">Under 500 Calories</option>
  <option value="dense">Over 500 Calories</option>
  </select>

  <div *ngIf="dontSeparateByDay">
    <div *ngFor="let currentFood of childFoodList | calorieness:filterByDensity">
      <div class="separator"></div>
      <li>Name: {{currentFood.name}}</li>
      <li>Details: {{currentFood.details}}</li>
      <li>Calories: {{currentFood.calories}}</li>
      <li>Date Eaten: {{currentFood.getDate()}}</li>
      <button (click)="editButtonClicked(currentFood)">Edit!</button>
      <div class="separator"></div>
    </div>
  </div>

  <div *ngIf="!dontSeparateByDay">
    <div *ngFor="let currentList of foodByDays">
      <div *ngFor="let currentFood of currentList | calorieness:filterByDensity">
        <div class="separator"></div>
        <li>Name: {{currentFood.name}}</li>
        <li>Details: {{currentFood.details}}</li>
        <li>Calories: {{currentFood.calories}}</li>
        <li>Date Eaten: {{currentFood.getDate()}}</li>
        <button (click)="editButtonClicked(currentFood)">Edit!</button>
        <div class="separator"></div>
      </div>
      <div class="day-separator"><h3>End of Day: {{totalUpCalories(currentList)}} Calories</h3></div>
    </div>
  </div>
  `
})

export class FoodListComponent {
  @Input() childFoodList: Food [];
  @Output() clickSender = new EventEmitter();
  filterByDensity: string = "none";
  dontSeparateByDay: boolean = true;
  foodByDays = [];

  editButtonClicked(foodToEdit: Food) {
    this.clickSender.emit(foodToEdit);
  }

  onChange(density) {
    this.filterByDensity = density;
  }

  totalUpCalories(currentList) {
    var totalCalories: number = 0;
    for(var i=0;i<currentList.length;i++) {
      totalCalories += currentList[i].calories;
    }
    return totalCalories;
  }

  returnDefault() {
    this.dontSeparateByDay = true;
  }

  separateByDays() {
    this.foodByDays = [];
    var listSize: number = 1;
    for(var i=1;i<this.childFoodList.length;i++) {
      if(this.childFoodList[i].getDate() !== this.childFoodList[i-1].getDate()) {
        listSize++;
      }
    }
    console.log(listSize);
    for(var i=0;i<listSize;i++) {
      var newList = [];
      this.foodByDays.push(newList);
    }

    var whichList: number = 0;
    this.foodByDays[whichList].push(this.childFoodList[0]);
    for(var i=1;i<this.childFoodList.length;i++) {
      if(this.childFoodList[i].getDate() === this.childFoodList[i-1].getDate()) {
        this.foodByDays[whichList].push(this.childFoodList[i]);
      } else {
        whichList++;
        this.foodByDays[whichList].push(this.childFoodList[i]);
      }
    }
    console.log(this.foodByDays);
    this.dontSeparateByDay = false;
  }
}
