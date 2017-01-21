function MathService () {
  let vm = this;
  vm.sayHello = sayHello;

  function sayHello () {
    console.log("hello from MathService!!")
  }

};

export { MathService }
