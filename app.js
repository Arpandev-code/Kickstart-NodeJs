var a=20
var b =20

console.log(a+b);


console.log(this); //empty object but if we use it in web brower console it show the global object

console.log(global);// print the global object in the Js runtime -node which gives super power to nodeJs with lots of cool & powerfull features 

console.log(globalThis); // stander keyword which refers to global object for both web brower & JS runtime

console.log(globalThis===global); //output-True i.e. globalThis refers to global object
