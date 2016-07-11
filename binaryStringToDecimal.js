assertEquals(convertBinaryStringToDecimal('0'), 0);
assertEquals(convertBinaryStringToDecimal('1'), 1);
assertEquals(convertBinaryStringToDecimal('101'), 5);
assertEquals(convertBinaryStringToDecimal('0011'), 3);
assertEquals(convertBinaryStringToDecimal('1000'), 8);
assertEquals(convertBinaryStringToDecimal('2'), -1); // error case: return -1
assertEquals(convertBinaryStringToDecimal('-10'), -1); // error case
assertEquals(convertBinaryStringToDecimal([1, 10]), -1); // error case
assertEquals(convertBinaryStringToDecimal('abc'), -1);
assertEquals(binaryTheHardWay('0'), 0);
assertEquals(binaryTheHardWay('1'), 1);
assertEquals(binaryTheHardWay('101'), 5);
assertEquals(binaryTheHardWay('0011'), 3);
assertEquals(binaryTheHardWay('1000'), 8);
assertEquals(binaryTheHardWay('2'), -1); // error case: return -1
assertEquals(binaryTheHardWay('-10'), -1); // error case
assertEquals(binaryTheHardWay([1, 10]), -1); // error case
assertEquals(binaryTheHardWay('abc'), -1);


function convertBinaryStringToDecimal(input) {
  if (typeof input !== 'string') return -1;
  var decimal = parseInt(input, 2);
  if (decimal >= 0) return decimal;
  return -1;
}

function binaryTheHardWay(input) {
  if (typeof input !== 'string' || input < 0) return -1;
  var decimal2 = 0;
  var power = input.length - 1;

  for (var i = 0; i < input.length; i++) {
    if (input[i] > 1) return -1;
    if (input[i] == 1) {
      decimal2 += Math.pow(2, power);
      power -= 1;
    } else if (input[i] == 0) {
      power -= 1;
    } else {
      return -1;
    }
  }
  return decimal2;
}

function assertEquals(a, b) {
  if (a === b) {
    console.log('PASS');
  } else {
    console.log('FAIL! ' + a + ' != ' + b);
  }
}
