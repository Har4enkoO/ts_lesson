function sequence(start = 0, step = 1) {
  let startCount = start;
  return function () {
    let returnValue = startCount;
    startCount += step;
    return returnValue;
  };
}
