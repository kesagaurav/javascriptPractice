by value and by reference

1)by default all objs are by reference.
mutate means to chnage someting

immiutae measn the value cannot be chnaged


by ref(all objects(including funcs))
var c={greeting: 'hi'};
var d;

d=c;
c.greeting='hello';
console.log(c,d);

so above in obj are ref once u chnage one it will chnage for all in the abvoe once they are poining to same funcs in memory.

equas opeator sets up new memory space (new address)

c={greeting:'howdy'}
console.log(c);
conole.log(d)

//all primitive values are by value and 
all objs are references