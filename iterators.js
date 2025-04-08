const company={
    employees:['gaurav','deepa'],
    next(){
        return {value:this.employees[0],done:false}
    }
}