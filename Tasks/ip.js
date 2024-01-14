// Split string by the first occurrence of separator

Parseip = (ip) => {
  const arr = ip.split(".").filter(Boolean);
  if (arr.length > 3) {
    return arr.map(Number);
  }
  return undefined;
};

module.exports = Parseip;
