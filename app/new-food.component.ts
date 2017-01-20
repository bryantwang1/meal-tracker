import { Component, Output, EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  template: `
  <button (click)="showAddForm()">Add a Food</button>
  <div *ngIf = "showForm">
    <h3>Add a Food</h3>
    <label>Food Name:</label>
    <input #newName><br>
    <label>Food Details:</label>
    <input #newDescription><br>
    <label>Food Calories:</label>
    <input #newCalories type="number"><br>
    <label>Date Eaten(leave as default to set to today):</label>
    <input #newDate type="date"><br>
    <button (click)="submitForm(newName.value, newDescription.value, newCalories.value, newDate.value); newName.value=''; newDescription.value=''; newCalories.value=''; newDate.value='';">Add This Food</button>
  </div>
  `
})

export class NewFoodComponent {
  showForm: boolean = false;
  @Output() newFoodSender = new EventEmitter();

  showAddForm() {
    this.showForm = true;
  }

  submitForm(name: string, description: string, calories: number, dateEaten: string) {
    var newFoodToAdd: Food = new Food(name, description, calories, dateEaten);
    this.showForm = false;
    this.newFoodSender.emit(newFoodToAdd);
  }
}
