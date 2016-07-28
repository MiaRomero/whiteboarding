// Given the root of a NON binary tree, return an array that
// represents a pre-order traversal of that tree.

function traverse(node) {
  if (node !== null && node.childArray.length !== 0) {
    var result = [node.value];
    for (var i = 0; i < node.childArray.length; i++) {
      var thisChildsOutput = traverse(node.childArray[i]);
      if (thisChildsOutput !== null) {
        for (var j = 0; j < thisChildsOutput.length; j++) {
          result.push(thisChildsOutput[j]);
        }
      }
    }
    return result;
  } else if (node !== null && node.childArray.length === 0) {
     return [node.value];
  } else {
      return null;
  }
}

function assertEquals(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) console.log('PASS');
  if (JSON.stringify(a) !== JSON.stringify(b)) {
    console.log('FAIL \n' + JSON.stringify(a) + ' != \n' + JSON.stringify(b));
  }
}

var tree = {
  value: 2,
  childArray: [
    {
      value: 5,
      childArray: [{
        value: 6,
        childArray: [{
          value: 9,
          childArray: []
        }, {
          value: 8,
          childArray: []
        }]
      },
      {
        value: 7,
        childArray: [{
          value: 11,
          childArray: []
        }, null]
      }]
  }, {
    value: 15,
    childArray: [null,
    {
      value: 20,
      childArray: [{
        value: 21,
        childArray: [{
          value: 30,
          childArray: []
        }, {
          value: 33,
          childArray: []
        }]
      }, {
        value: 40,
        childArray: [{
          value: 41,
          childArray: []
        }, null]
      }]
    }]
  }]
};

var tree2 = {
  value: 4,
  childArray: [
    {
      value: 5,
      childArray: [
        {
          value: 6,
          childArray: []
        }, null]
    },
    {
      value: 7,
      childArray: []
    }]
};

var tree3 = {
  value: 5,
  childArray: [
    {
      value: 8,
      childArray: [
        {
          value: 10,
          childArray: []
        }]
    }, null]
};

var tree4 = {
  value: 3,
  childArray: []
};

var tree5 = null;

assertEquals(traverse(tree), [2, 5, 6, 9, 8, 7, 11, 15, 20, 21, 30, 33, 40, 41]);
assertEquals(traverse(tree2), [4, 5, 6, 7]);
assertEquals(traverse(tree3), [5, 8, 10]);
assertEquals(traverse(tree4), [3]);
assertEquals(traverse(tree5), null);
