const form = document.getElementById ('post');
const nameInput = document.getElementById ('name');
const salary = document.getElementById ('salary');
const button = document.getElementById ('post-button');

const createPost = async (name, salary) => {
  const eid = Math.random ();
  const post = {
    eid:eid,
    name: name,
    salary: salary,
  };
//   const fd = new FormData ();
//   fd.append ('empname',name);
//   fd.append ('salary',salary);
  try{
    const response=await sendPostRequest ('http://localhost:9090/employee','POST',post);
    console.log(response);
      window.location.href = './api.html';

    
  }catch(err){
    throw new Error('werong');
  }
  
};

form.addEventListener ('submit', async event => {
  event.preventDefault ();
  const formName = nameInput.value;
  const formSal = salary.value;
  console.log(formName);
  
  createPost (formName , formSal);
});

const sendPostRequest = async (url, method, data) => {
  return fetch (url,{
    method:method,
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })
    .then (res => res.json ())
    .catch (err => console.log ('something wrong pls see fix it'));
};
