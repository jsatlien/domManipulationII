
function CalculatorController (MathService) {

  let vm = this;
  vm.consoleTest = consoleTest;
  vm.currentInput = "";

  MathService.sayHello();

  function consoleTest () {
    console.log("hello from calccontroller!")
  }

  consoleTest ();
};

CalculatorController.$inject = ["MathService"];

export { CalculatorController }
