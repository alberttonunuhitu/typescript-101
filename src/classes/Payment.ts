import {HasFormatter} from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  constructor(
    private recipient: string,
    private details: string,
    private amount: number,
  ) {}

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }
}