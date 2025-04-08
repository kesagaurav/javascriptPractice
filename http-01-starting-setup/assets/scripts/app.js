const listsEle = document.querySelector ('.posts');
const singlePosts = document.getElementById ('single-post');
const form = document.querySelector ('#new-post form');
const fetchButton = document.querySelector ('#available-posts button');
const postLists = document.querySelector ('ul');

function sendHttpRequest (method, url, data) {
  // const promise=new Promise((resolve,reject)=>{
  //  const xhr=new XMLHttpRequest();
  // xhr.setRequestHeader('Content-Type','application/json');
  //opne has 2 methods one is http methods like get,post,delete,update.
  //anthor is url.
  // xhr.open(method,url);
  // xhr.responseType='json';
  // xhr.onload=function(){
  //     if(xhr.status>=200&&xhr.status<300)
  //     resolve(xhr.response);
  //     else
  //     reject(new Error('something went wrong!'));

  // };

  // xhr.onerror=function(){
  //     console.log(xhr.response);
  //     console.log(xhr.status);
  //     reject(new Error('wrong'));

  // }

  // xhr.send(JSON.stringify(data));
  return fetch (url, {
    method: method,
    // body: JSON.stringify (data),
    body: data,

    // headers: {
    //   'Content-Type': 'application/json',
    // },
  })
  .then (res => {
    if (res.status >= 200 && res.status < 300) return res.json ();
    else
      return res.json ().then (errData => {
        console.log (errData);
        throw new Error ('Server side error pls check !!!');
      });
  }); //fetch is default is promise based.
  // });
  // return promise;
}

async function fetchPosts () {
  try {
    const responseData = await sendHttpRequest (
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    );
    const listOfPosts = responseData;
    for (const posts of listOfPosts) {
      const postEl = document.importNode (singlePosts.content, true);
      postEl.querySelector ('h2').textContent = posts.title.toUpperCase ();
      postEl.querySelector ('p').textContent = posts.body;
      postEl.querySelector ('li').id = posts.id;
      listsEle.append (postEl);
    }
  } catch (error) {
    alert (error.message);
  }
}

async function createPost (title, content) {
  const userId = Math.random ();
  const post = {
    title: title,
    body: content,
    userId: userId,
  };
  const fd=new FormData();
  fd.append('title',title);
  fd.append('body',content);
  fd.append('userId',userId);

  sendHttpRequest ('POST', 'https://jsonplaceholder.typicode.com/posts', fd);
}

fetchButton.addEventListener ('click', () => {
  fetchPosts ();
});
form.addEventListener ('submit', event => {
  event.preventDefault ();
  const enteredTitle = event.currentTarget.querySelector ('#title').value;
  const content = event.currentTarget.querySelector ('#content').value;
  createPost (enteredTitle, content);
});
createPost ('DUMMY', 'A dummy post');

postLists.addEventListener ('click', event => {
  if (event.target.tagName === 'BUTTON') {
    const postid = event.target.closest ('li').id;
    sendHttpRequest (
      'delete',
      `https://jsonplaceholder.typicode.com/posts/${postid}`
    );
  }
});
