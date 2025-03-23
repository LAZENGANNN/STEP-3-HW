import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: false,
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  a: any = '';
  b: any = '';
  op: string = '';

  story: string[] = [];

  result: number = 0;

  changeA(event: Event): void {
    this.a = (event.target as HTMLInputElement).value;
    console.log('a', this.a);
  }

  changeB(event: Event): void {
    this.b = (event.target as HTMLInputElement).value;
    console.log('b', this.b);
  }

  changeOP(event: Event): void {
    this.op = (event.target as HTMLInputElement).value;
    console.log('op', this.op);
  }

  calc(): void {
    switch (this.op) {
      case '+':
        this.result = this.a + this.b;
        this.story.push(`${this.a} ${this.op} ${this.b} = ${this.result}`);
        break;
      case '-':
        this.result = this.a - this.b;
        this.story.push(`${this.a} ${this.op} ${this.b}= ${this.result}`);
        break;
      case '*':
        this.result = this.a * this.b;
        this.story.push(`${this.a} ${this.op} ${this.b} = ${this.result}`);
        break;
      case '/':
        if (this.b !== 0) {
          this.result = this.a / this.b;
          this.story.push(`${this.a} ${this.op} ${this.b} = ${this.result}`);
        } else {
          throw new Error('незьля делить на 0');
        }
        break;
      case 'pow':
        this.result = Math.pow(this.a, this.b);
        this.story.push(`${this.a} ^ ${this.b} = ${this.result}`);
        break;
    }
  }
}
