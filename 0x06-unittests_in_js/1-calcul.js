function calculateNumber(type, a, b) {
  num1 = Math.round(a);
  num2 = Math.round(b);

  if (type === 'SUBTRACT') {
    return num1 - num2;
  }

  if (type === 'DIVIDE') {
    if (num2 === 0) {
      return 'Error';
    }
    return num1 / num2;
  }

  return num1 + num2;
}

module.exports = calculateNumber;
