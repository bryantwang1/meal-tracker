export class Food {
  public dateEaten: string;

  constructor(public name: string, public details: string, public calories: number, public newDateEaten: string) {
    if(newDateEaten === '') {
      var tempDate: Date = new Date();
      var timeOffset: number = tempDate.getTimezoneOffset();
      var newDate: Date = new Date(tempDate.getTime() + ((timeOffset * 60) * 1000));
      this.dateEaten = newDate.toLocaleDateString();
    } else {
      var tempDate: Date = new Date(newDateEaten);
      var timeOffset: number = tempDate.getTimezoneOffset();
      var newDate: Date = new Date(tempDate.getTime() + ((timeOffset * 60) * 1000));
      this.dateEaten = newDate.toLocaleDateString();
    }
  }
}
