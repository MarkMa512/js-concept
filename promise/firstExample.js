let p = new Promise((resolve, reject) => {
    let a = 1+1 

    // what we want to do when the promise is a success 
    if (a ==2) {
        resolve('success!')
    // what we want to do when the promise fails 
    }else{
        reject('failed!')
    }
})

p.then((message)=>{
    // then is called when promise resolves successfully 
    console.log('This is in the then ' + message)
}).catch((message)=> {
    // catch is called when the promise is rejected / failes
    console.log('This is in the catch ' + message)
})

/**
 * Promise is great when when need to do something that takes a long time in the back ground 
 * such as downloading images from a different server, intead of making everything else wait
 * for it, doing something after it is completed. We can also catch it to see if it is a fail. 
 */