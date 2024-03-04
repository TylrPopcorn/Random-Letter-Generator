// This function will wait for the specified time in milliseconds.
function wait(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

// EXPORTS-------:
export default wait;
