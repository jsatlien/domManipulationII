import angular from 'angular';

import { CalculatorController } from './controllers/calculator.js'

angular
  .module('app', [])
  .controller('CalculatorController', CalculatorController)
