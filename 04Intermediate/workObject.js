let myYoutubeVideoOne = {

    title : 'intro video' ,
    videoLength :  20 ,
    videoDescription : 'this is an introduction video about mr Akhil Binu',
    author : 'Akhil Binu'
}

let myYoutubeVideoTwo = {

    title : 'intermediate' ,
    videoLength :  20 ,
    videoDescription : 'this is an introduction video about mr Akhil Binu(upgraded version) ',
    author : 'Akhil Binu'
}


// console.log(myYoutubeVideo)

// console.log(`this is an ${myYoutubeVideo.title} by ${myYoutubeVideo.author}`)

// myYoutubeVideo.title = 'introductory video'

// console.log(`this is an ${myYoutubeVideo.title} by ${myYoutubeVideo.author}`)

// console.log(myYoutubeVideo)

let changeVideoLength = function(myObject){
    // return `time of this video is ${myObject.videoLength+2}`

    return{
        formatOne : `time of this video is ${myObject.videoLength+2}` , 
        formtTwo : `time of this video is ${myObject.videoLength+1}`
     
    }

}  

// we can use return statement as a function which is shown above

console.log(changeVideoLength(myYoutubeVideoOne).formatOne)