function addNumbers(){
    let sum  = 0;
    for (const i in arguments) {
        if (arguments.hasOwnProperty(i)) {
            const num = arguments[i];
            sum = sum + num;
        
        }
    }
    return sum;
}


const result = addNumbers(2, 3, 5, 5);
console.log(result)