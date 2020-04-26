
const sayHello1 = function() {
   return function() {
      console.log("Hello!");
   }
}
const myFunc = sayHello1();
myFunc();

function sayHello() {
    return function() {
       console.log("Hello!!");
    }
 }
 sayHello()();

 function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }