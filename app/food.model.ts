export class Food {
  public dateEaten: Date;

  constructor(public name: string, public details: string, public calories: number, newDateEaten: string) {
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
