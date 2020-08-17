function People(name, phone, job) {
    this.name = name;
    this.phone = phone;
    this.job = job;

    this.print = function () {
        return (` name:  ${this.name} phone: ${this.phone} job: ${this.job}`)
    }
}


// const p1 = new People("Sujon Hossain", "01980653626", "Developer", "Software Engineer");
// console.log(p1.print());

// People.prototype.aim = function aim() {
//     console.log(this.dream);
// }

// p1.aim();

// p1.isLike = "Someting";
// console.log(p1.isLike);
// p1["hasLike"] = "Like Something";
// console.log(p1["hasLike"])

People.prototype.aim = function(hasAim, aimName){
    this.hasAim = hasAim;
    this.aimName = aimName;
};

let p1 = new People("Sujon Hossain", "01980653626", "Developer & Student");
p1.aim(true, "Software Engineer");

console.log(p1);

const object = new Object({
    name :p1.name,
    job: p1.job,
    print: function(){
        console.log("Name: "  + this.name + " " + " Job: "+ this.job +";")
    }
});

object.print(); 

for(const key in object){
    if(object.hasOwnProperty(key)){
        let element = object[key];
        console.log(element)
    }
}