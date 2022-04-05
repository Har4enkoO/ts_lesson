function sequence(start = 0, step = 1) {
  let startCount = start;
  return function () {
    let returnValue = startCount;
    startCount += step;
    return returnValue;
  };
}

function take(fn, count) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result = [...result, fn()];
  }
  return result;
}

function map(fn, array) {
  return array.map((el) => fn(el));
}

//you need to write your own map and filter , don't use existing!

function bind(fn, context) {
  return function (...args) {
    return fn.call(context, ...args);
  };
}

function pluck(objects, fieldName) {
  let result = [];
  objects.forEach((el) => (result = [...result, el[fieldName]]));
  return result;
}

function filter(arr, fn) {
  return arr.filter((el) => fn(el) === true);
}

function count(obj) {
  return Object.keys(obj).length;
}
