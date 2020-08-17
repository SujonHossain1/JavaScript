function factorial(num) {
    let fact = 1;
    for (let i = num; i >= 1; i--) {
        fact = fact * i;
    }

    return fact;
}
let result = factorial(100);
console.log(result);

const fact = (num) => {
    if (num <= 0) {
        return 1;
    }
    else {
        return fact(num - 1) * num; 
    }

}

result = fact(5);
console.log(result)
