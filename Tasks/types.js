// Count types in an array

types_ = (arr) => {
  return arr.reduce((acc, value) => {
    const type = typeof value;
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});
};

module.exports = types_;
