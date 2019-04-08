/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    
  let n = numArray.length;
  for(let j = 0; j < numArray.length; j++){
  for(let i=0; i < n ; i++){
      let a = i;
      let b = i+1;
      if (numArray[b]<numArray[a]){
        let temp = numArray[a];
        numArray[a] = numArray[b];
        numArray[b] = temp;
      }

    }
  }
  return 5;
}
let arr = [ 5,3,2,8,15,2,1];
let result = bubbleSort(arr);
console.log(arr);
console.log(result);