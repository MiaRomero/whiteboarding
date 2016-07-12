console.log('regex: ');
assertEquals(findSubstring('abcdeabc opabcu', 'abc'), 3);
assertEquals(findSubstring('abcabcabcabc', 'ab'), 4);
assertEquals(findSubstring('abc', 'abc'), 1);
assertEquals(findSubstring('abdABCiuheabc pouabC', 'abc'), 3);
assertEquals(findSubstring('xyz', 'abc'), 0);
assertEquals(findSubstring('', 'abc'), -1); // error case
assertEquals(findSubstring('xyz', ''), -1); // error case
console.log('counting: ');
assertEquals(substringInstances('abcdeabc opabcu', 'abc'), 3);
assertEquals(substringInstances('abcabcabcabc', 'ab'), 4);
assertEquals(substringInstances('abc', 'abc'), 1);
assertEquals(substringInstances('abdABCiuheabc pouabC', 'abc'), 3);
assertEquals(substringInstances('xyz', 'abc'), 0);
assertEquals(substringInstances('', 'abc'), -1); // error case
assertEquals(substringInstances('xyz', ''), -1); // error case

function findSubstring(string, substring) {
  if (string.length === 0 || substring.length === 0) return -1;

  var matches = string.match(new RegExp(substring, 'gi'));
  if (matches === null) return 0;
  return matches.length;
}

function substringInstances(inputString, substring) {
  if (inputString.length === 0 || substring.length === 0) return -1;

  inputString = inputString.toLowerCase();
  var stringArray = inputString.split('');
  substring = substring.toLowerCase();
  var substringArray = substring.split('');
  var count = 0;
  var j = 0;

  for (var i = 0; i < stringArray.length; i++) {
    j = 0;
    if (stringArray[i] === substringArray[j]) {
      while (stringArray[i] === substringArray[j]) {
        i++;
        j++;
        if (j === substringArray.length) {
          count++;
          break;
        }
      }
    }
  }
  return count;
}

function assertEquals(a, b) {
  if (a === b) console.log('PASS');
  if (a !== b) console.log('FAIL, ' + a + ' != ' + b);
}
