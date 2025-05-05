class Node{
    constructor(value) {
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor() {
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
    insertAtBeg=(data)=>{
        let newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }

    insertAtEnd(data){
        let newNode=new Node(data);
        this.tail.next=newNode;
        this.tail=newNode;
    }

    delAtBeg(data){
        let temp=this.head;
        this.head=this.head.next;
        temp=this.head;
    }

    delAtEnd(data){
        let temp=this.tail;
        this.tail.next=null;
        temp=this.tail;
    }

    display(){
        let temp=this.head;
        for(let i=0;temp!=null;temp=temp.next){
                console.log(temp.value);
                
            }
    }
}

let list=new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.insertAtBeg(5);
list.insertAtEnd(70);
list.delAtBeg(5);
list.delAtBeg(10);
list.delAtEnd(70);
list.display();
