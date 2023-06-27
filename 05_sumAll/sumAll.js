const sumAll = function(num1,num2) {
    if(!(num1<0 || num2< 0 || !Number.isInteger(num1) || !Number.isInteger(num2))){ //  nc !== Number
        let sum=0;
        if(num2<num1){
            let temp;
            temp=num2;
            num2=num1;
            num1=temp;
        }
        for(let x=num1;x<=num2;x++){
            sum+=x;
        }
        return sum;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
