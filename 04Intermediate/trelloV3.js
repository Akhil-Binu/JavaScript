let myTodos  = {

    day : 'monday' ,
    meetings : 0 ,
    meetDone : 0 ,

    addMeeting  : function(meet){
       this.meetings = this.meetings + meet
    },


    summary : function(){

        return  ` you have ${this.meetings} meetings  `

    },

    meetingDone : function(meet){
        this.meetDone = this.meetDone + meet
        return `total meeting has been done is ${this.meetDone}`

    }
,
  reset :  function(){

    this.meetDone = 0 
    this.meetings = 0

  },
}

// let myTodosTwo  = {

//     day : 'Tuesday' ,
//     meetings : 13 ,
//     meetDone : 2 ,

//     addMeeting  : function(){
//         console.log(this)
//     }

// }
myTodos.addMeeting(2)

console.log(myTodos.summary())

console.log(myTodos.meetingDone(1))

let reseted = myTodos.reset()

console.log(myTodos)

