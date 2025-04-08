const button=document.querySelector('button');

const getPosition=(opts)=>{
    //async will do the same behind the scences.
    const promise=new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(success=>{
            resolve(success);
        },error=>{
         reject(error);  //mark the promised as failed.
        },opts);

    });
    return promise;
}

const setTimer=duration=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done!');//coming from js engine.//and also it can be object,array or no.
        },duration);
    });
    return promise;
 
}

async function trackHandler(){
    let positionData;
    //await should add before any promises like below bec getPosition() is a promise
    let posData;//recive undefine bec we didnot get any values.
    let timer;
    try{
        posData=await getPosition();
         timer= await setTimer(2000);
    }catch(error){
        console.log(error);
        
    }
    console.log(timer,posData);
    
    // getPosition().then(posData=>{
    //    positionData=posData;
    //     return setTimer(1000);        
    // }).then(data=>{
    //     console.log(data,positionData);
        
    // }).catch(err=>{
    //     console.log(err);  // if the catch is in middle then it will skips the previous rejections and move on to anthor then block if we want to crash at end then we should keep catch at the end of then.
    //     return 'hello';
        
    // }).finally(data=>{
    //     console.log(data,positionData);
        
    // });
    // setTimeout(()=>{
    //     console.log("Timer done!");
    // },0);
    // console.log('Getting position.......');
}
button.addEventListener('click',trackHandler);
