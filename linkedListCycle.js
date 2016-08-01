// Find if a linked list has a cycle in it.

function checkCycle(node) {
  var slow = node;
  var fast = node;
  while (fast !== null) {
    if (fast.next) {
      fast = fast.next;
      if (slow === fast) {
        return true;
      }
    }
    slow = slow.next;
    fast = fast.next;
  }
  return false;
}

function assertEquals(a, b) {
  if (a === b) console.log('PASS');
  if (a !== b) console.log('FAIL ' + a + ' != ' + b);
}

var d = {
  value: 'a',
  next: null
};
var c = {
  value: 'a',
  next: d
};
var b = {
  value: 'a',
  next: c
};
var a = {
  value: 'a',
  next: b
};
d.next = b;
var linkedList1head = a;

var h = {
  value: 'a',
  next: null
};
var g = {
  value: 'a',
  next: h
};
var f = {
  value: 'a',
  next: g
};
var e = {
  value: 'a',
  next: f
};
var linkedList2head = e;

var m = {
  value: 'a',
  next: null
};
var l = {
  value: 'a',
  next: m
};
m.next = l;
var linkedList3head = l;

var x = {
  value: 'a',
  next: null
};
var linkedList4head = x;

assertEquals(checkCycle(linkedList1head), true);
assertEquals(checkCycle(linkedList2head), false);
assertEquals(checkCycle(linkedList3head), true);
assertEquals(checkCycle(linkedList4head), false);
