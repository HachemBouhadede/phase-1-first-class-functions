const receivesAFunction = (callbackFn) => callbackFn();

const returnsANamedFunction = () => {
  function namedFunction() {
    console.log("this a named function");
  }
  return namedFunction;
};

const returnsAnAnonymousFunction = () => {
  return function (anything) {
    return 1;
  };
};
