//func programming -> first class functions giving code in terms of functions

var arr1=[1,2,3];
console.log(arr1);

var arr2=[];
// for (var index = 0; index < arr1.length; index++) {
//     arr2.push(arr1[index]*2);
    
// }
// console.log(arr2);
// arr1.map(a=>a*2).forEach(a=>console.log(a));
arr1.filter(a=>a>2).forEach(a=>console.log(a));

var checkList=function(limiter,item){
    return item > limiter;
}

var checkPastLimitSpecified=function(){
    return function(limiter,item){
        return item > limiter;
    }.bind(this,limiter);
};

function mapForEach(arr,fn){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

// var map=mapForEach(arr1,checkPastLimitSpecified.bind(1));
// console.log(map);


var arr3=_.map(arr1,function(item){
    return item*3;
})
console.log(arr3);
