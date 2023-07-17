var tealine = ['James', 'Jim', 'Johnson', 'Joey', 'Billy', 'Bravo', 'George'];
var part = tealine.slice(2,5);
console.log(part);
console.log(tealine[3]);
var name = tealine.indexOf('Joey');
console.log(name);
part.push('Johnny');
console.log(part);
console.log(part.length);
console.log(tealine);
tealine.pop();
console.log(tealine);
//unshift() adds new items to the beginning of an array
//shift() removes the first item of an array
tealine.shift();
console.log(tealine);
tealine.unshift('Charlott')
console.log(tealine);

