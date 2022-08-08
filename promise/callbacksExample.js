const userLeft = false 
const userWatchCatMeme = false

function watchTutorialCallback(callback, errorCallback){
    if (userLeft){
        errorCallback({
            name: 'User left', 
            message: ':('
        })
    }else if (userWatchCatMeme) {
        errorCallback({
            name:'User watch cat meme', 
            message: 'Tutorial < Cat'
        })
    }else{
        callback('Thumbs up!')
    }
}

watchTutorialCallback((message)=>{
    console.log('success: ' + message)
}, (error)=>{
    console.log(error.name + error.message)
})