import { Component } from '@angular/core';

@Component({
  selector: 'app-angulator',
  templateUrl: './angulator.component.html',
  styleUrls: ['./angulator.component.css']
})
export class AngulatorComponent {


  input: string = '';
  result: string = '';


  pressNum(num: string) {


    this.input = this.input + num
    this.result = this.input
  }


  equals() {
    this.result = eval(this.input)
    this.input = this.result
  }

  allclear() {
    this.input = '';
    this.result = this.input
  }

  clear() {
    if (this.input != "") {
      this.input = this.input.substr(0, this.input.length - 1)
    }
  }

}




