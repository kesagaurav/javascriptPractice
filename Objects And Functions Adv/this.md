function a(){
    console.log(this);
    
}
a();
here we will be getting window obj.

let e=function() {
    console.log( " e", this);
    
}
e();
the above one iwil point to same global obj.