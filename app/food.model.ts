export class Food {
  public dateEaten: Date;
  public calories: number = 0;

  constructor(public name: string, public details: string, newCalories: string, newDateEaten: string) {
    this.calories = parseInt(newCalories);

    if(newDateEaten === '') {
      var tempDate: Date = new Date();
      var timeOffset: number = tempDate.getTimezoneOffset();
      var newDate: Date = new Date(tempDate.getTime() + ((timeOffset * 60) * 1000));
      this.dateEaten = newDate;
    } else {
      var tempDate: Date = new Date(newDateEaten);
      var timeOffset: number = tempDate.getTimezoneOffset();
      var newDate: Date = new Date(tempDate.getTime() + ((timeOffset * 60) * 1000));
      this.dateEaten = newDate;
    }
  }

  getDate() {
    return this.dateEaten.toLocaleDateString();
  }
}
