// let s3="i am learning java streams API";
// s3.split(" ").sort().map(a=>a.length).forEach(a=>console.log(a));

class Node{
     constructor(data,next) {
        this.data=data;
        this.next=null;
        this.head=null;
        this.tail=null;
     }
}

class LinkedList{
    constructor(head,tail) {
            this.head=null;
            this.tail=null;
    }
    append=(data)=>{
        let newNode=new Node(data);
        if(this.head==null){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }


    BegAtNode=(data)=>{
        let newNode=new Node(data);
        newNode.next=this.head;
       // newNode=this.head;
        this.head=newNode;
    }

    EndAtNode=(data)=>{
        let newNode=new Node(data);
        this.tail.next=newNode;
        this.tail=newNode;
    }

    positionsAtNode=(data,pos)=>{
        let temp=this.head;
        let newNode=new Node(data);
        for(var i=1;i<pos-1;i++){
            temp=temp.next;
            newNode.next=temp.next;
            temp.next=newNode;
        }
    }
    
    delAtBeg=()=>{
        let temp=this.head;
        temp.next=null;
        this.head=temp;
    }

    delAtEnd=()=>{
        let temp=this.tail;
    }

 display=()=>{
        let temp=this.head;
        for (let i = 0; temp!=null;temp=temp.next) {
            console.log(temp.data);
            
            
        }
    }


}

let list=new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.BegAtNode(5);
list.EndAtNode(70);
list.EndAtNode(80);
list.EndAtNode(90);
list.EndAtNode(190);
list.positionsAtNode(1,3);
list.delAtBeg();
list.display();









