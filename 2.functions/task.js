function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let i=0; i < arr.length; i++){
  if (arr[i] < min) {
    min = arr[i];
  }
  
  else if (arr[i] > max) {
    max = arr[i];
  }
  sum += arr[i];
}
  let avr = sum/arr.length;
  let avg = parseFloat(avr.toFixed(2));

   return { min: min, max: max, avg: avg };
  }
  
  
  
  
  function summElementsWorker(...arr) {
    const sum = arr.reduce((acc,item) => acc + item, 0)
      return sum;
  }
  
  function differenceMaxMinWorker(...arr) {
    if (arr = []){ 
      return 0;
    }

    let maxNumber = Math.max(...arr);
    let minNumber = Math.min(...arr);

    return maxNumber - minNumber;
  }
  
  function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i=0; i < arr.length; i++){
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i]
      }
      else {
        sumOddElement += arr[i]
      }
    }
    let subEvenOdd = sumEvenElement - sumOddElement;
    return subEvenOdd;
  }
  
  function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i=0; i < arr.length; i++){
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
      return sumEvenElement/countEvenElement;
  }
  




  function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i=0; i < arrOfArr.length; i++){
      const arr = func(...arrOfArr[i]);
      if (arr > maxWorkerResult) {
        maxWorkerResult = arr;
      }
    }
    return maxWorkerResult;
  }
  