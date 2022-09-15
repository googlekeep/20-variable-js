console.log(4/2);
console.log(98/2);
console.log(144/2);
console.log(22565/2);


function  isEvent(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder ===0){
        console.log('number is event');
    }

    else{
        console.log('number is odd');
    }
}

isEvent(300);
isEvent(12830);