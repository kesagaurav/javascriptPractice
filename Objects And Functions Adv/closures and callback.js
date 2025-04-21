function sayHello(){
    var greeting='Hi';

    setTimeout(function(){
        console.log(greeting);
        
    },3000);
}

sayHello();


function tellme(callback) {
        var a=1000;
        var b=2000;

        callback();//is a call back its runs the func i give it.
}

tellme(function() {
    

    console.log('i am done');
    


});


tellme(function() {
    

    alert('i am done');
    


});