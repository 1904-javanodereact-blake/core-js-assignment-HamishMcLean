/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
  let removal = someArr.splice(index, 1);
    return someArr;

}

console.log(spliceElement([1,2,3,4], 3));
