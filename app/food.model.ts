export class Keg {
  public pintsLeft: number = 124;

  constructor(public name: string, public brand: string, public price: number, public alcoholContent: number) { }

  getPrice() {
    var priceArrays: string[] = this.price.toString().split('');
    var resultArrays: string[] = [];
    var counter: number = priceArrays.length;

    resultArrays.push('$');
    for(var numeral of priceArrays) {
      if(counter === 2) {
        resultArrays.push('.');
      }
      resultArrays.push(numeral);
      counter--;
    }
    var resultString: string = resultArrays.join('');

    return resultString;
  }

  decrementPint() {
    this.pintsLeft--;
  }
}
