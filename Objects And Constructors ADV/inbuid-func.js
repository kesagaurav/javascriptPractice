String.prototype.isLengthGreater=function(limit){
    return this.length>limit;
}

console.log("john".isLengthGreater(3));
console.log("guarav".length);

Number.prototype.isPositive=function(){
    return this>0
}
