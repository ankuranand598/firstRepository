//Suppose there are 4 persons playing a game. The result of a particular match is dependant on various strategies of AND and OR
var a = true && false && !(true) || false; // false
console.log(a);
var b = true || !(false) && (true || false); //true
console.log(b);
var c = false || (true && false) || true ; // true
console.log(c);
var d = true || (false && true || true); // true
console.log(d);


