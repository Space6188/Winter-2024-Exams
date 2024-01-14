// Return an array without duplicates

duplicate = (value, reps) => {
  if (reps > 0) {
    return Array(reps).fill(value);
  }
  return [];
};

module.exports = duplicate;
