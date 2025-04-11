/*
console.log("Training Dashboard")
// suresh id trainig - single 
// let , var , const
let name1 = "Playwrigt Training"
let trainer = "suresh"
let no_of_particpants = 18
let participants = ["chris", "aditya"]
let ApiResponse = {
    code : 12,
    response : "OK",
    message: "200 OK"
}
let completed = false
let _name = name1
let $name1 = ""

console.log(typeof name1)
console.log(typeof trainer)
console.log(typeof no_of_particpants)
console.log(typeof participants)
console.log(typeof completed)
console.log(typeof ApiResponse)
console
console.log(name1.toUpperCase())
console.log(trainer.toUpperCase())
console.log(ApiResponse)
*/

function DoPrint(){
    // Declaration
    console.log("Doing Print")
    // Print employee attanedve to WgatsSpp
    // 
}

function add(arg1, arg2)
{
    console.log("Doing Addition")
    // Print employee attanedve to WgatsSpp
    return arg1 + arg2; 
}

/*
DoPrint(10,20,20); // Invcation
console.log(add(1,2,10,20));
let my_addition_func = add; // First Class function
console.log(my_addition_func(100,200));
let x = 10
let my_name = "suresh"
console.log(typeof add);
console.log(typeof my_addition_func)
console.log(typeof x)
console.log(typeof my_name)
*/
function invoke_any(input_func){
    console.log("This function can invoke any other");
    input_func();
}

//invoke_any(DoPrint)
//invoke_any(add)


let myfunc = function (){
    console.log("This is anonymous");
}

//myfunc();

// Arrow Function 

let my_arrow = (a,b) => a -b;
// Lambda expressions /// JS 

//console.log(my_arrow(20,10));

export function calculate_premium(age,gender){
    if (age > 60) {
        return 10;
    }
    if (age < 15 && gender === "M") {
        return 25
    } else {
        100;
    }
    return 100;
}

console.log(calculate_premium(20,"M"));

export function calculate_premium1(age,gender){
    if (age > 60) {
        return 10;
    }
    if (age < 15 && gender === "F") {
        return 15
    } else {
        100;
    }
    return 100;
}

console.log(calculate_premium1(20,"F"));
