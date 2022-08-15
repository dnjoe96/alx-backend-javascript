const sinon = require('sinon');
const chai = require('chai')

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

const expect = chai.expect

describe('Spies', function () {
  it('has the same math', () => {
    const stub_utils = sinon.stub(Utils, 'calculateNumber');
    stub_utils.returns(10);
    const spy_console = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stub_utils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spy_console.calledOnceWithExactly('The total is: 10')).to.be.true;

    stub_utils.restore();
    spy_console.restore();
  })
});
