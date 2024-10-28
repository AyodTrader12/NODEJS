// // SETINTERVAL

// const rendermyName = setInterval(() => {
//   console.log("my name is ibrahim");

//   clearInterval(rendermyName);
// }, 1000);

// // WITHOUT DECLARING A VARIABLE
// setInterval(() => {
//   console.log("hello");

//   clearInterval;
// }, 1000);
// // SETTIMEOUT

// const render = setTimeout(() => {
//   console.log("hello world");
// });

// const y = "y axis";
// console.log(y);

// //SETIMMEDIATE

// const display = setImmediate(() => {
//   console.log("render immediate");

//   clearImmediate(display);
// });

// console.log(display);

//CLASSWORK

const money = (amount: number) => {
  const finalPrice = amount.toLocaleString();
  const duration = setInterval(() => {
    console.log(`₦${finalPrice} is your charges`);
    clearInterval(duration);
  }, 5000);
  return { duration };
};

console.log("money....", money(10000));

// COUNTDOWN

const count = (myCount: number) => {
  let count: number = myCount;
  const timer = setInterval(() => {
    console.log(count--);

    if (count === 0) {
      clearInterval(timer);
      console.log("Countdown ended");
    }
  }, 1000);
};
console.log(count(10));
