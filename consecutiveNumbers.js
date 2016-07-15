assertEquals(findMissing([]), -1); // error case
assertEquals(findMissing('abc'), -1); // error case
assertEquals(findMissing(4), -1); // error case
assertEquals(findMissing([2]), 'none missing');
assertEquals(findMissing([1, 2, 3]), 'none missing');
assertEquals(findMissing([3, 4, 6, 7]), 5);
assertEquals(findMissing([23, 24, 25, 26, 28]), 27);

function findMissing(inputArray) {
  if (!Array.isArray(inputArray) || inputArray.length === 0) return -1;
  if (inputArray.length === 1) return 'none missing';
  var missing;
  var starting = inputArray[0];

  for (var i = 1; i < inputArray.length; i++) {
    if (inputArray[i] === starting + 1) {
      missing = 'none missing';
      starting++;
    } else {
        missing = inputArray[i - 1] + 1;
        break;
      }
  }
  return missing;
}

function assertEquals(a, b) {
  if (a === b) console.log('PASS');
  if (a !== b) console.log('FAIL ' + a + ' != ' + b);
}
