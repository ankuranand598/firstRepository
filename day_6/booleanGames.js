/*fill in the Required Boolean value to get the Required output in the following cases. 
There might be multiple answers possible*/
//  Part-1 (Result: false)
console.log( true || true || false && true );
console.log('not possible');
// part- 2 (result: true)
console.log(true || true && false ||  true)
// part- 3 (Result: false)
console.log(false || true || false || false && true);
console.log('not possible');
// part- 3 (result: true)
console.log(false && true || true || true && false);
// part-4 (result- false)
console.log(false || false || false && true || false);