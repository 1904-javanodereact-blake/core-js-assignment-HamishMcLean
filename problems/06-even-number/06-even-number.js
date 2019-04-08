/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
let stringCon = someNum/2 + ''

  if (stringCon.includes('.') ){ //The scenario if someNum was odd
      return false;
  }

  else if (someNum === 0){ // make sure the number isn't zero
    console.log('Invalid Option Entered')
    
}
else {
    return true;
}

}

console.log(isEven(0)); //printing
console.log(isEven(5));