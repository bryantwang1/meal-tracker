import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './food.model';

@Pipe({
  name: 'calorieness',
  pure: false
})

export class CalorienessPipe implements PipeTransform {
  transform(input: Food[], desiredDensity) {
    var calorieDense: Food[] = [];
    var calorieLight: Food[] = [];

    for(var i = 0;i < input.length; i++) {
      if(input[i].calories >= 500) {
        calorieDense.push(input[i]);
      } else {
        calorieLight.push(input[i]);
      }
    }

    if(desiredDensity === "dense") {
      return calorieDense;
    } else if(desiredDensity === "light") {
      return calorieLight;
    } else {
      return input;
    }
  }
}
