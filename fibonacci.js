console.log('array tests: ');
assertEquals(fibonacci(1), 1);
assertEquals(fibonacci(2), 1);
assertEquals(fibonacci(5), 5);
assertEquals(fibonacci(10), 55);
assertEquals(fibonacci(20), 6765);
// error cases:
assertEquals(fibonacci(-10), -1);
assertEquals(fibonacci('abc'), -1);
assertEquals(fibonacci(0), -1);
console.log('number tests: ');
assertEquals(fibonacci2(1), 1);
assertEquals(fibonacci2(2), 1);
assertEquals(fibonacci2(5), 5);
assertEquals(fibonacci2(10), 55);
assertEquals(fibonacci2(20), 6765);
// error cases:
assertEquals(fibonacci2(-10), -1);
assertEquals(fibonacci2('abc'), -1);
assertEquals(fibonacci2(0), -1);
console.log('recursive tests:');
assertEquals(fibonacciRecursive(1), 1);
assertEquals(fibonacciRecursive(2), 1);
assertEquals(fibonacciRecursive(5), 5);
assertEquals(fibonacciRecursive(10), 55);
assertEquals(fibonacciRecursive(20), 6765);
// error cases:
assertEquals(fibonacciRecursive(-10), -1);
assertEquals(fibonacciRecursive('abc'), -1);
assertEquals(fibonacciRecursive(0), -1);

function fibonacci(n) {
  if (typeof n !== 'number' || n <= 0) return -1;
  var series = [];
  var i = 0;

  while (i < n) {
    if (i === 0 || i === 1) {
      series.push(1);
    } else {
      series.push(series[i - 1] + series[i - 2]);
    }
    i++;
  }
  return series[n - 1];
}

function fibonacci2(n) {
  if (typeof n !== 'number' || n <= 0) return -1;
  var a = 0;
  var b = 1;
  var f = 1;

  for (var i = 1; i < n; i++) {
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

function fibonacciRecursive(n) {
  if (typeof n !== 'number' || n <= 0) return -1;
  if (n <= 2) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}

function assertEquals(a, b) {
  if (a === b) {
    console.log('PASS');
  }
  if (a !== b) {
    console.log('FAIL! ' + a + '!=' + b);
  }
}
