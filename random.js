const arr = [2, 5, 52, 13, 64, 92, 22, 5, 92];
const unqiure = [];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    let index = unqiure.indexOf(element);
    
    if(index === -1){
        unqiure.push(element)
    }
    
}

console.log(unqiure)