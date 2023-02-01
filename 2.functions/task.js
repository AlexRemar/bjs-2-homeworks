function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = min + max;
  
  for (let i=0; i < arr.length; i<0){
  if (i > max) {
    max = arr[i];
    sum += arr[i];
  }
  
  else if (i < min) {
    min = arr[i];
    sum += arr[i];
  }
  }
  let avg = sum/arr.length;
  +avg.toFixed(2);
  
    return { min: min, max: max, avg: avg };
  }
  
  
  
  
  function summElementsWorker(...arr) {
    arr.reduce(function(a,b){
      return a + b;
    });
  }
  
  function differenceMaxMinWorker(...arr) {
    let minNumber = math.min(arr);
    let maxNumber = math.max(arr);
    return maxNumber - minNumber;
  
  }
  
  function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    for (let i=0; i < arr.length; i<0){
      if (i % 2) {
        sumEvenElement++
      }
      else {
        sumOddElement++
      }
      return sumEvenElement - sumEvenElement;
    }
  }
  
  function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    for (let i=0; i < arr.length; i<0){
      if (i % 2) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
      return sumEvenElement/countEvenElement;
  }
  




  function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    for (let i=0; i < arrOfArr.length; i<0){
      makeWork(...func) += arrOfArr[i];
      const obj = makeWork(...func);
      if (obj > maxWorkerResult) {
        obj = maxWorkerResult;
      }
    }
    return maxWorkerResult;
  }
  