// Split string by the first occurrence of separator

ipToArr = (ip) => {
  const arr = ip.split(".").filter(Boolean);
  if (arr.length > 3) {
    return arr.map(Number);
  }
  return "IP not valid";
};

module.exports = ipToArr;
