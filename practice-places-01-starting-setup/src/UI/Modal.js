export class Modal{
    constructor(contentId,fallBackText) {
        this.fallBackText=fallBackText;
        this.contentTemplateEl=document.getElementById(contentId);
        this.modalTemplateEl=document.getElementById("modal-template");
    }

    show(){
        if('content' in document.createElement('template')){
           const mc=document.importNode(this.modalTemplateEl.content,true);
           this.modalEle=mc.querySelector('.modal');    
           this.backdropEle=mc.querySelector('.backdrop');
           const contentEle=document.importNode(this.contentTemplateEl.content,true);     
           this.modalEle.appendChild(contentEle);
            document.body.insertAdjacentElement('afterbegin',modalEle);
            document.body.insertAdjacentElement('afterbegin',backdropEle);

        }else{
            //fall back code
            alert(this.fallBackText);
        }
    }


    hide(){
        if(this.modalEle){
            document.body.removeChild(this.modalEle);
            document.body.removeChild(this.backdropEle);
            this.modalEle=null;
            this.backdropEle=null;
        }
    }
}