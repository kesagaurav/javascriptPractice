let strings=['a','b','c','d'];

strings.push('f');
console.log(strings);

strings.unshift('b');
console.log(strings);

strings.pop();
console.log(strings);

strings.shift();
console.log(strings);

strings.find(a=>a.includes("a")).indexOf("a");

console.log("find",strings);


