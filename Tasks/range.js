// Generate int array from given range

_range = (start, stop) =>
  Array.from({ length: stop + 1 - start }, (_, index) => start + index);

module.exports = _range;
