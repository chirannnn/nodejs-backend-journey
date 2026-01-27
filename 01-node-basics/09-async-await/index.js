function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayGreet(name) {
  await delayFn(2000);
  console.log("Im ", name);
}

delayGreet("Chirannn");

async function divideFn(num1, num2) {
  try {
    if (num2 == 0) {
      throw Error("Can not divide by 0");
    }
    return num1 / num2;
  } catch (error) {
    console.log("Error", error);
    return null;
  }
}

async function mainFn() {
  console.log(await divideFn(3, 3));
  console.log(await divideFn(3, 0));
}

mainFn();
