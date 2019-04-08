/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if (startIndex >= endIndex){ //make sure the starting index is before the ending index
        throw `Sorry, your input is invalid`
    }
    else if (typeof(startIndex) !== 'number'||  typeof(endIndex) !== 'number'){ //ensure indexes are numbers
        throw 'Sorry, your input is invalid'
    }
    else if (startIndex < 0 || endIndex > someStr.length){ // make sure startindex is positive and end index isn't longer than the string
        throw 'Sorry, your input is invalid'
    }

    let finalStr = someStr.substring(startIndex, endIndex); // find substring
    return finalStr;
}

console.log(substring('Hello, my name is James McLean', 4,9))