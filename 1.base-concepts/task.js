"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4*a*c;

  if (d > 0) {
    let m = (-b + Math.sqrt(d)) / (2*a);
    let n = (-b - Math.sqrt(d)) / (2*a);
    arr.push(m,n)
  }

  else if (d === 0) {
    let e = (-b / (2*a));
    arr.push(e)
  }

  else if (d < 0) {
    arr = []
  }

  return arr;
}

"use strict"

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
 
  let P = percent/100/12;
  let S = amount - contribution;
  let n = countMonths;
  let monthlyPayment = S * (P + (P / (((1 + P)**n) - 1)));
  let totalAmount = monthlyPayment * n;
  let total = +totalAmount.toFixed(2);


 

  if (isNaN(percent)) {
    return(false)
  }

  if (isNaN(contribution)) {
    return(false)
  }

  if (isNaN(amount)) {
    return(false)
  }

  else if (percent < 0 && percent > 100) {
    return('false')
  }

  else {
    return(total);
  }
}