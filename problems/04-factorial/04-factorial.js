/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(someNum) {
        if (someNum === 0) { 
            return;
        } else if (someNum === 1){ // if the number is 1 it just returns 1
            return 1;
        } 

        factorialProduct = someNum*factorial(someNum-1); //calculating factorial
        return factorialProduct; 
        
    }
    someNum = 5; //defining the number to be calculated
    console.log(`The factorial of ${someNum} is ${factorial(someNum)}`)
  