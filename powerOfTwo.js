assertEquals(powerOfTwo(1), true);
assertEquals(powerOfTwo(2), true);
assertEquals(powerOfTwo(4), true);
assertEquals(powerOfTwo(16), true);
assertEquals(powerOfTwo(48), false);
assertEquals(powerOfTwo(64), true);
assertEquals(powerOfTwo(5), true);
assertEquals(powerOfTwo(0), false);
assertEquals(powerOfTwo(10), false);
assertEquals(powerOfTwo(24), false);
assertEquals(powerOfTwo(123), false);
assertEquals(powerOfTwo(255), false);
assertEquals(powerOfTwo(131073), false);
assertEquals(powerOfTwo(-2), false);
assertEquals(powerOfTwo(0.5), false);
assertEquals(powerOfTwo('abc'), false);
console.log('whileLoop');
assertEquals(power2(1), true);
assertEquals(power2(2), true);
assertEquals(power2(4), true);
assertEquals(power2(16), true);
assertEquals(power2(48), false);
assertEquals(power2(64), true);
assertEquals(power2(512), true);
assertEquals(power2(0), false);
assertEquals(power2(10), false);
assertEquals(power2(24), false);
assertEquals(power2(123), false);
assertEquals(power2(255), false);
assertEquals(power2(131073), false);
assertEquals(power2(-2), false);
assertEquals(power2(0.5), false);
assertEquals(power2('abc'), false);

function divideByTwo(input) {
  if (input / 2 === 1) {
    return true;
  } else if (input % 2 === 0) {
    return divideByTwo(input / 2);
  } else {
    return false;
  }
}

function powerOfTwo(input) {
  if (typeof input !== 'number' || input < 1) return false;
  if (input === 1) return true;
  return divideByTwo(input);
}

function power2(input) {
  if (typeof input !== 'number' || input < 1) return false;
  if (input === 1) return true;
  var power = false;
  while (input % 2 === 0) {
    input = input / 2;
    if (input === 1) {
      power = true;
    }
  }
  return power;
}

function assertEquals(a, b) {
  if (a === b) console.log('PASS');
  if (a !== b) console.log('FAIL! ' + a + '!=' + b);
}
