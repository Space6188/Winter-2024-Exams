// Count types in an array
const defaultVL = { number: 0, boolean: 0, string: 0 };
types_ = (arr) =>
  arr.reduce(
    (acc, value) => {
      const type = typeof value;
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    },
    { ...defaultVL }
  );
module.exports = types_;
