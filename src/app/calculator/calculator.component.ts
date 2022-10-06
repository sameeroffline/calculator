import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  input: string = '';
  result: string = '';


  pressNum(num: string) {

    if (num == "0") {
      if (this.input == "") {
        return;
      }
      const PrevKey = this.input[this.input.length];
      if (PrevKey === '/' || PrevKey === '*' || PrevKey === '-' || PrevKey === '+' || PrevKey === '<-' || PrevKey === '%') {
        return;
      }
    }
    this.input = this.input + num
    this.calcAnswer();
  }

  pressOperator(value: string) {

    const lastKey = this.input[this.input.length];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '<-' || lastKey === '% ') {
      return;
    }
    this.input = this.input + value
    this.calcAnswer();
  }


  clear() {
    if (this.input != "") {
      this.input = this.input.substr(0, this.input.length - 1)
    }
  }

  allClear() {
    this.result = '';
    this.input = '';
  }

  calcAnswer() {
    let formula = this.input;
    let lastKey = formula[formula.length];
    this.result = eval(formula);
  }

  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input == "0") this.input = "";
  }

}