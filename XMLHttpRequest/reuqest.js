const request=new XMLHttpRequest();
const httpMethod=(method,url)=>{
    const promise=new Promise((resolve,reject)=>{
        request.open(method,url);
        request.responseType='json';
         request.onload=()=>{
            if(request.status>=200&&request.status<300){
                resolve(request.response);
            }else{
               reject(new Error('went wrong!'));
            }
        };


        request.onerror=()=>{
            reject(new Error('went wrong 2 !'));
        };
        request.send(JSON.stringify(request));
    });
    return promise;

   
}

   fetchPosts=async()=>{
    const fetch=await httpMethod('GET',"https://jsonplaceholder.typicode.com/posts");
    console.log("get values are " , JSON.stringify(fetch));
    
}


deletePosts=async(id)=>{
    const del=await httpMethod('delete',`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log("del posts are " + JSON.stringify(del));
    
}

fetchPosts();

deletePosts(1);


