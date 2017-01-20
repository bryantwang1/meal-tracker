import { Component, Input, Output,  EventEmitter } from '@angular/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food',
  template: `
  <div *ngIf = "childSelectedFood">
    <h3>Edit Food: {{childSelectedFood.name}}</h3>
    <label>Food Name:</label>
    <input [(ngModel)]="childSelectedFood.name"><br>
    <label>Food Details:</label>
    <input [(ngModel)]="childSelectedFood.details"><br>
    <label>Food Calories:</label>
    <input [(ngModel)]="childSelectedFood.calories" type="number"><br>
    <label>Date Eaten(leave as default to set to today):</label>
    <input [(ngModel)]="childSelectedFood.dateEaten"><br>
    <button (click)="finishedEditing()">Done</button>
  </div>
  `
})

export class EditFoodComponent {
  @Input() childSelectedFood: Food;
  @Output() doneButtonClickedSender = new EventEmitter();

  finishedEditing() {
    this.doneButtonClickedSender.emit();
  }
}
