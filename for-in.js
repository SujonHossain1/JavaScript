const obj = {
    name: "Sujon Hossain",
    job: "Developer",
    age: [1, 3, 53, 53, 53, 5,3, 53,]
}

let value = [];
for (const i in obj) {
    if(obj.hasOwnProperty(i)){
       value.push(obj[i] );
       
    }
}

console.log(value);

for (const i of value){
    console.log(i);
}

for(let i = 0; i < Object.keys(obj).length; i++){
  let element = obj[Object.keys(obj)[i]];
  console.log(element)
}