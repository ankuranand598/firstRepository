var a = true && false && !(true) || false;
console.log(a);
var b = true || !(false) && (true || false);
console.log(b);
var c = false || (true && false) || true;
console.log(c);
var d = true || (false && true || true);
console.log(d);