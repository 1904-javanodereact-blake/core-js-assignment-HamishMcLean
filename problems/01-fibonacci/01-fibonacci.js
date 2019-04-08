/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) {
    if (n === 0){ //filter for first 2 numbers
        return 0;
    } else if (n === 1){
        return 1;
    } 
    
    let fibNumbers = new Array()
    fibNumbers.push(0)
    fibNumbers.push(1) //pushing the first 2 numbers of the sequence into the array
    
    // fibNumbers === [0,1]
    let fibSum; // declaring fibSum

    for (let i=2; i <= n; i++) {
        fibSum = fibNumbers[i-2] + fibNumbers[i-1]; //calculating the number in index 'i' of sequence
        fibNumbers.push(fibSum); //pushing number in index 'i' into the array
    }
    return fibNumbers[n]; //return calculated number

}
console.log(`The fibonacci number of the given index is ${fib(5)}`)