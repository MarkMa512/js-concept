const userLeft = false 
const userWatchCatMeme = false

function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if (userLeft){
            reject({
                name: 'User left', 
                message: ':('
            })
        }else if (userWatchCatMeme) {
            reject({
                name:'User watch cat meme', 
                message: 'Tutorial < Cat'
            })
        }else{
            resolve('Thumbs up!')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('success: ' + message)
}).catch((error) => {
    console.log(error.name + error.message)
}) 