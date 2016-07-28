// Given the root of the tree, return the minimum depth of the tree

function treeDepth(node) {
  if (node === null) return 0;
  if (node.leftChild && !node.rightChild) {
    return 1 + treeDepth(node.leftChild);
  } else if (node.rightChild && !node.leftChild) {
    return 1 + treeDepth(node.rightChild);
  } else if (node.leftChild && node.rightChild) {
    return 1 + Math.min(treeDepth(node.leftChild), treeDepth(node.rightChild));
  } else {
    return 0;
  }
}

function assertEquals(a, b) {
  if (a === b) console.log('PASS');
  if (a !== b) console.log('FAIL ' + a + '!= ' + b);
}

var tree = {
  value: 2,
  leftChild: {
    value: 5,
    leftChild: {
      value: 6,
      leftChild: {
        value: 9,
        leftChild: null,
        rightChild: null
      },
      rightChild: {
        value: 8,
        leftChild: null,
        rightChild: null
      }
    },
    rightChild: {
      value: 7,
      leftChild: {
        value: 11,
        leftChild: null,
        rightChild: null
      },
      rightChild: null
    }
  },
  rightChild: {
    value: 15,
    leftChild: null,
    rightChild: {
      value: 20,
      leftChild: {
        value: 21,
        leftChild: {
          value: 30,
          leftChild: null,
          rightChild: null
        },
        rightChild: {
          value: 33,
          leftChild: null,
          rightChild: null
        }
      },
      rightChild: {
        value: 40,
        leftChild: {
          value: 41,
          leftChild: null,
          rightChild: null
        },
        rightChild: null
      }
    }
  }
};

var tree2 = {
  value: 4,
  leftChild: {
    value: 5,
    leftChild: {
      value: 6,
      leftChild: null,
      rightChild: null
    },
    rightChild: null
  },
  rightChild: {
    value: 7,
    leftChild: null,
    rightChild: null
  }
};

var tree3 = {
  value: 5,
  leftChild: {
    value: 8,
    leftChild: {
      value: 10,
      leftChild: null,
      rightChild: null
    }
  },
  rightChild: null
};

var tree4 = {
  value: 3,
  leftChild: null,
  rightChild: null
};

var tree5 = null;

assertEquals(treeDepth(tree), 3);
assertEquals(treeDepth(tree2), 1);
assertEquals(treeDepth(tree3), 2);
assertEquals(treeDepth(tree4), 0);
assertEquals(treeDepth(tree5), 0);
