var a=["john","kesa","deepa"];
console.log(a);
Array.prototype.myCustomFeature='cool';
for(let i=0;i<a.length;i++){
    console.log(a[i]);
    
}


var kesa={
    firstname:"kg",
    lastname:"gaurav",
    greet:function(){
        return 'Hi ' + this.firstname;
    }
}

var kesa2=Object.create(kesa);
console.log(kesa2);


var kesa3={
    firtsname:'k',
    lastname:'g'
}

console.log(kesa3.prototype);

var people=[
    {
        firstname:'k',
        lastname:'g',
        address:[
            '111 main st',
            '222 Third st.'
        ]
    },{
        firstname:'k',
        lastname:'g1',
        address:[
            '111 main st',
            '222 Third st.'
        ],
        greet:function(){
            return 'Hello!';
        }
    }
]

console.log("people",people);
