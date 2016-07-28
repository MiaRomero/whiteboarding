// Return Length of the largest subarray with contiguous elements.
// Those elements do not have to be in order in the original array.

function assertEquals(a, b) {
  if (a === b) console.log('PASS');
  if (a !== b) console.log('FAIL \n' + a + '\n!=\n' + b);
}

assertEquals(findLength([10, 12, 11]), 3);
assertEquals(findLength([14, 12, 11, 20]), 2);
assertEquals(findLength([1, 56, 58, 57, 90, 92, 94, 93, 91, 45]), 5);
assertEquals(findLength([5, 15, 8, 20, 9, 7, 22, 6]), 5);
assertEquals(findLength([]), -1);
assertEquals(findLength('abc'), -1);

function compareNumbers(a, b) {
  return a - b;
}

function findLength(inputArray) {
  if (!Array.isArray(inputArray) || inputArray.length === 0) return -1;
  var sortedArray = inputArray.sort(compareNumbers);
  var length = 0;

  for (var i = 0; i < sortedArray.length; i++) {
    var subArray = [];
    var index = i;

    do {
      subArray.push(sortedArray[i]);
      i++;
    } while (sortedArray[i] === sortedArray[i - 1] + 1);

    if (subArray.length > length) {
      length = subArray.length;
    }
    i = index;
  }
  return length;
}
