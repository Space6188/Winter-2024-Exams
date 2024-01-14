// Sum all numbers from an array
sum = (arr) =>
  arr.reduce((acc, value) => {
    if (typeof value === "number") acc + value;
  });

module.exports = sum;
