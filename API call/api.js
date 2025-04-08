const body=document.getElementById("crud-table");
const sendHttpRequests=async (url)=>{
    return fetch(url).then(res=>res.json()).catch(err=>{
        console.log(error);
        
    });
}
const getApi= async ()=>{
    const url="http://localhost:9090/employees";
    const http=await sendHttpRequests(url).then(data=>{
        data.forEach(employees=>{
            const row=document.createElement('tr');
            row.innerHTML=`
               <td>${employees.eid}</td>
               <td>${employees.name}</td>
               <td>${employees.salary}</td>
            `;
            body.appendChild(row);
        })
    })

    // fetch(url).then(res=>res.json()).then(data=>{
    //     data.forEach(employees=>{
    //         const row=document.createElement('tr');
    //         row.innerHTML=`
    //            <td>${employees.eid}</td>
    //            <td>${employees.name}</td>
    //            <td>${employees.salary}</td>
    //         `;
    //         body.appendChild(row);
         
    //     })
       
    // }).catch(err=>console.log('wrong pls try again'));
  
};
const contentLoad=document.addEventListener('DOMContentLoaded',()=>{
    getApi();
});


