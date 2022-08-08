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

makeRequest('Google').then(
    response=>{
        console.log('Response has been resecieved! ')
        return processRequest(response)
}).then(
    processedResponses=>{
        console.log(processedResponses)
}).catch(
    error=>{
        console.log(error)
})

/**Output: 
Making request to Google
Response has been resecieved!
Processing response
Extra Information + Google says hi       
 */