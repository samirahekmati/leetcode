// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.


// Hint
// In Javascript, there is the concept of "truthiness" and "falsiness". Values such as 0, undefined, null, and false are falsy. Most values are truthy: 1, {}, [], true, etc. In Javascript, the contents of if-statements don't need to be booleans. You can say "if ([1,2,3]) {}", and it's equivalent to saying 'if (true) {}".



var filter = function (arr, fn) {
  let filteredArray = [];
  
  console.log("input array-->", arr);
  console.log("input fn-->", fn);

  for (let i = 0; i < arr.length; i++) {
    console.log("25-->", arr[i]);
    if (fn(arr[i], i)) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

const arr = [0, 10, 20, 30];
const fn = function greaterThan10(n) {
  return n > 10;
};

console.log(filter(arr, fn));
