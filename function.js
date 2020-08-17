function explainFunction(name, age, print){
    print(name, age);
}
function print(name, age){
    console.log(`name: ${name} age: ${age}`)
};

explainFunction("Sujon Hossain", 21, print);

function person(name, age, whatDo){
    whatDo();
    console.log(name)
    console.log(age)
}

person("Sujon Hossain", 21, () =>{
    console.log("Developer");
})

person("Rita Hossain", 16, job)
function job (){
    console.log("Student")
}