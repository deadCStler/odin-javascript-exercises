const reverseString = function(input) {
    let myArray=Array.from(input);
    let result="";
    for(let i=myArray.length-1;i>=0;i--){
        result+=myArray[i];
    }
    return result;
    //return input.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
