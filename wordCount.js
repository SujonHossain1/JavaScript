const speech = "my   name is sujon hossain";

let count = 0;

for (let i = 0; i < speech.trim().length; i++) {
    const char = speech[i];

   if(char == " " && speech[i-1] != " "){
       count++;
   }
  
}
count++;
console.log(count)