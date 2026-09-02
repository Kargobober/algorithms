// @ts-ignore
Number.prototype[Symbol.iterator] = function () {
  let current = 1;
  const valueNum = this as number;

  return {
    next() {
      if (current <= valueNum) {
        return {
          done: false,
          value: current++,
        };
      }

      return {
        done: true,
        value: undefined,
      };
    },
  };
};

// @ts-expect-error
console.log(...5);
