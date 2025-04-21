// console.log(this);
function a(){
    console.log(this);
    this.ok="hello";
}
a();

let e=function() {
    console.log( " e", this);
    
}
a();
console.log(ok);

e();


var f={
    name:'gaurav',
    log:function name() {
        //this will point thorught the whole obj
        var self=this;
        self.name='updated obj';
        console.log(self);
        
        let g=function(newName) {
            self.name=newName;
        }
        g('updated again');
        console.log(self);
        
    }
}
f.log();