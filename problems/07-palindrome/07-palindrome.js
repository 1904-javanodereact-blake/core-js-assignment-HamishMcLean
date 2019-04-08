/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) { //complete reverse string amd then come back
    let strReversed = reverseStr(someStr);

  if (someStr === strReversed){  //checking if the 
      return true;
  }
  else{
      return false;
  }
  
}


function reverseStr(someStr) { // reversing the string
    let strArr = someStr.split("");
    console.log(someStr)

    let j = 0
    let temp = '' 
    for(let i=someStr.length-1;i >= (someStr.length)/2; i--){//using the reverse string code to calculate
    
      temp = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = temp;
      
      j++;
      
    }
    let strReversed = strArr.join('');
    
    
    return strReversed;
  }

console.log(isPalindrome('favorite'));
