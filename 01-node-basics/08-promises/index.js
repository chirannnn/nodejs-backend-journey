function delayFn(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

console.log("start");

delayFn(2000).then(() => {
  console.log("after 2 sec later");
});

console.log("end");

// // //

function divide(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Cannot perform divide by 0");
    } else {
      resolve(num1 / num2);
    }
  });
}

divide(10, 0)
  .then((result) => console.log("Result : ", result))
  .catch((err) => console.log("Error : ", err));
