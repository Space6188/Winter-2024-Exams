// Sum all numbers from an array
sum = (arr) =>
  arr.reduce((acc, value) => {
    if (typeof value === "number") {
      return acc + value;
    } else {
      return acc;
    }
  });

module.exports = sum;
