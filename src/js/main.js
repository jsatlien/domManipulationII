import angular from 'angular';
import jquery from 'jquery';

import { CalculatorController } from './controllers/calculator.js'
import { MathService } from './services/math.js'

angular
  .module('app', [])
  .controller('CalculatorController', CalculatorController)
  .service('MathService', MathService)
