'use strict'
let a = parseInt(prompt('введите первое число'));
let b = parseInt(prompt('введите первое число'));

if (a >= 0 && b >= 0) {
   alert(a - b);
} else if (a < 0 && b < 0) {
   alert(a * b);
} else if (a >= 0 && b < 0 || a < 0 && b >= 0) {
   alert(a + b);
}


