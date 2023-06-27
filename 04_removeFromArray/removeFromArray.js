const removeFromArray = function(myArray, ...toRemove) {
    
    for(let x of toRemove){
        for(let i=0;i<myArray.length;i++){
            if(x===myArray[i]){
                myArray.splice(i,1);
                i--;
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
