//your JS code here. If required.
// utility function to create delayed promises
function delayTransform(value, time, transformFn, messagePrefix = "Result") {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newValue = transformFn(value);
      // update DOM
      document.getElementById("output").innerText = `${messagePrefix}: ${newValue}`;
      resolve(newValue);
    }, time);
  });
}

// main logic
document.getElementById("btn").onclick = function () {
  const inputValue = Number(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");
  outputDiv.innerText = ""; // clear previous results

  // start promise chain
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.innerText = `Result: ${inputValue}`;
      resolve(inputValue);
    }, 2000);
  })
    .then((num) => delayTransform(num, 2000, (n) => n * 2))
    .then((num) => delayTransform(num, 1000, (n) => n - 3))
    .then((num) => delayTransform(num, 1000, (n) => n / 2))
    .then((num) => delayTransform(num, 1000, (n) => n + 10, "Final Result"));
};