'use strict'

/**
 * функция сложения
 * @param {number} num1
 * @param {number} num2
 * @returns {number} итоговое значение
 */
function digitalSum (num1, num2) {
   return num1 + num2;
}


/**
 * функция вычитания
 * @param {number} num1
 * @param {number} num2
 * @returns {number} итоговое значение
 */
function digitalSubtr (num1, num2) {
   return num1 - num2;
}


/**
 * функция умножения
 * @param {number} num1
 * @param {number} num2
 * @returns {number} итоговое значение
 */
function digitalMult (num1, num2) {
   return num1 * num2;
}

/**
 * функция деления
 * @param {number} num1
 * @param {number} num2
 * @returns {number} итоговое значение
 */
function digitalSep (num1, num2) {
   return num1 / num2;
}
/**
 * 
 * @param {number} arg1 число
 * @param {number} arg2 число
 * @param {number} operation математическая опеарация
 */

function mathOperation(arg1, arg2, operation) {
   switch (operation) {      
      case "+":
         return digitalSum(arg1, arg2);
      case "-":
         return digitalSubtr(arg1, arg2);
      case "*":
         return digitalMult(arg1, arg2);
      case "/":
         return digitalSep(arg1, arg2);
      default:
         throw new Error("Неизвестная операция")
   }
}

