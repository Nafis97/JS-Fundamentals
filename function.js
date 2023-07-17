function sayMyName(){
    console.log("Heisenberg.")
    console.log("You are Goddamn right!")
}
function doubleIt(num){
    var result = num*2;
    //console.log(result);
    return result;
}
function add(num1, num2){
    var result= num1 + num2;
    return result;
}
sayMyName();
var number= 7;
var first = doubleIt(number);
var second = doubleIt(50);
console.log(first, second);
var total = first + second;
console.log(total);
var result = add(first, second);
console.log(result);
// ctrl + / for multi-line comment
/**Hey there This sign is used for multi-line comments. 
 * It is ver useful
 */