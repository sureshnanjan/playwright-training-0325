var myVar = "global"; // Declare a global variable
debugger;

var mystring = "Value"

//mystring.endsWith()
/* 
lafl;alk
aas
gg;;ag;g


*/

/**
 * JSDoc
 * This is a custom function demoing scopes in Javascript.
 * This does not return anything 
 * @example checkscopr();
 */
function checkscope( ) {
var myVar = "local"; // Declare a local variable
console.log(myVar);
}

/**
 * This is to demonstrate JSDOC with params and return "HELLO"
 * @param {*} first 
 * @param {*} second 
 * @returns 
 * @example demo_parameters(100,200)
 */
function demo_parameters(first, second){

    return "Hello";
}

var myObj = {}
var name1 = "Suresh"
var name2 = "Test User"
console.log(myObj)
console.log(myObj.prototype)
console.log(typeof myObj)
console.log(typeof name1)
String.prototype.specialMethod = function(){return "SPECIAL"};
console.log(name1.specialMethod())
console.log(name2.specialMethod())
//console.log(name2.someOtherNonExisting())
var someString = new String("String Value")
console.log(someString);

var myNum = 100;
console.log(myNum)
console.log(typeof myNum)
console.log(myNum.prototype)
console.log(myNum.toExponential())
Number.prototype.numericSpecial = function(){
    return 1000000;
}
console.log(myNum.numericSpecial())
var myOther = 20000;
console.log(myOther.numericSpecial())





//checkscope()
//demo_parameters()

