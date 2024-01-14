// Count words in a string

Words = (str) => {
  const trimmedStr = str.trim();
  const wordsArray = trimmedStr.split(" ");
  return wordsArray.length;
};

module.exports = Words;
