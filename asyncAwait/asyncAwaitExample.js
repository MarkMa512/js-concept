function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log(`Making request to ${location}`)
        if(location === 'Google'){
            resolve('Google says hi')
        }else{
            reject('We can only talk to google')
        }
    })
}

function processRequest(response){
    return new Promise((resolve, reject)=>{
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

// you need to have some kind of function that you are awaiting code is inside 

async function doWork(){
    const response = await makeRequest('Google')
    /*
    await: the code should wait until this makeRequest is finished, then it will execute the next thing 
    once the interpretor hits this await statement, it will just leave this function, do other work inside the programe,
    as soon as the makeRequest finishes, executing, it will comeback into here and return the result into the response 
    variable. 
    */
   console.log('Response Recieved')
   const processedResponse = await processedResponse(response)
   console.log(processedResponse)
}
