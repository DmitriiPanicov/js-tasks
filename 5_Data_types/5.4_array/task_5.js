function getMaxSubSum(arr) {
    let max = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let sumStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumStart += arr[j];
        max = Math.max(max, sumStart);
      }
    }
  
    return max;
  }