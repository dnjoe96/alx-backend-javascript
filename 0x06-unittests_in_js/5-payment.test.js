const sinon = require('sinon');
const chai = require('chai')

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const expect = chai.expect

describe('Hooks', function () {
  let spy_console;
  beforeEach(function () {
    spy_console = sinon.spy(console, 'log');
  });

  afterEach(function () {
    spy_console.restore();
  });

  it('logs correctly with 100, 20', () => {    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(100, 20);

    expect(spy_console.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(spy_console.calledOnce).to.be.true;
  });

  it('logs correctly with 10, 10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(spy_console.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(spy_console.calledOnce).to.be.true;
  });
});
