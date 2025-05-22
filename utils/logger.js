const info = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    // Jangan log saat testing
    console.log(...params);
  }
};

const error = (...params) => {
  if (process.env.NODE_ENV !== "test") {
    // Jangan log saat testing
    console.error(...params);
  }
};

module.exports = {
  info,
  error,
};
