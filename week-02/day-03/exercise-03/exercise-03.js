'use strict';
function printEven(num) {
  var res = [0];
  for (var i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      res.push(i + 1);
    }
  }
  console.log(res);
}
printEven(500);