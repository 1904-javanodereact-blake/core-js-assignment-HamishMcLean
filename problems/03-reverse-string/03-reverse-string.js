/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  let strArr = someStr.split(""); //defining the array to split string up in
  console.log(someStr) //logging the string
//  i++ === i = i+1
//  i-- === i = i-1
// 'str' += "ing" === 'string'
  let j = 0 // define temporary variable
  let temp = '' //define variable before loo[]
  for(let i=someStr.length-1;i >= (someStr.length)/2; i--){ 
  
    temp = strArr[i]; //switching around the letters
    strArr[i] = strArr[j];
    strArr[j] = temp;
    
    j++;
    
  }
  let strReversed = strArr.join('');// returning string to proper state
  
  
  return strReversed;
}
console.log(reverseStr("Hello everybody"))
