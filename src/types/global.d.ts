declare global {
  interface Window {
    log: typeof console.log;
  }

  const log: typeof console.log;
}

export {};
