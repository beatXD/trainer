const login = () => {
  console.log('login success');
  return Promise.resolve('do something');
};

const addToCart = () => {
  for (let i = 0; i < 10000; i++) {
    // console.log('add to cart success')
  }
  return Promise.resolve('do something');
};

const pay = () => {
  console.log('pay');
};

const startFn = async () => {
  console.log('start');

  try {
    // login 5 sec
    const loginResult = await login();

    const promiseList = [];

    // add 20 sec
    for (let item = 0; item < 10; item++) {
      const promiseAddItem = addToCart();
      promiseList.push(promiseAddItem);
    }

    // wait all
    const resultAddToCartAll = await Promise.all(promiseList);
    console.log(resultAddToCartAll);

    pay();
  } catch (error) {
    console.log('login failed with error', error);
  }
};

startFn();
