// Sum all numbers from an array
sum = (arr) => {
  if (arr.length > 0) {
    return arr.reduce((acc, value) => {
      if (typeof value === "number") {
        return acc + value;
      } else {
        return acc;
      }
    });
  }
  return "TypeError: Reduce of empty array with no initial value";
};

module.exports = sum;
