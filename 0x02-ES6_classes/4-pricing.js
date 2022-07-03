import Currency from './3-currency.js';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(code, currency);
    this._amount = amount;
    this._currency = currency;
  }

  set amount(amount) {
    if (typeof amount !== 'string') throw new TypeError('Not a string');
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  set currency(currency) {
    if (typeof currency !== 'string') throw new TypeError('Not a string');
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._name} (${this._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
