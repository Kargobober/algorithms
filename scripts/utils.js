window.log = console.log;

export function workout(delay) {
  const startTime = performance.now();
  while (performance.now() - startTime < delay) {}
}

/**
 *
 * @param {(...args: any[]) => void} cb
 * @param  {...any} args
 * @returns {void}
 */
export const tm = (cb, ...args) => {
  if (!cb) {
    log("tm - no cb.\n");
    return;
  }

  log(`tm - calling: ${cb.name} with args: ${args}`);
  const a = performance.now();
  const res = cb.apply({}, args);
  const b = performance.now();
  log(res);
  log(`Executing takes ${(b - a).toFixed(4)}ms.`);
  log("-----------------------------\n");
};
