function getRandomInt(min: number, max: number) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function getRandomSymbols(count: number) {
  let result = "";
  for (let i = 1; i <= count; i++) {
    result +=
      `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
        getRandomInt(0, 62)
      );
  }

  return result;
}

export = {
  getRandomInt,
  getRandomSymbols,
};
