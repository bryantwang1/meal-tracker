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
    <button (click)="submitForm(newName.value, newDescription.value, newCalories.value); newName.value=''; newDescription.value=''; newCalories.value='';">Add This Food</button>
  </div>
  `
})

export class NewFoodComponent {
  showForm: boolean = false;
  @Output() newFoodSender = new EventEmitter();

  showAddForm() {
    this.showForm = true;
  }

  submitForm(name: string, description: string, calories: number) {
    var newFoodToAdd: Food = new Food(name, description, calories);
    this.showForm = false;
    this.newFoodSender.emit(newFoodToAdd);
  }
}
