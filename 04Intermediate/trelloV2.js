let myTodos  = {
  day  : 'Monday' ,
  meetings : 0 ,
  meetDone : 0 ,
}

 let addMeeting = function(todo, meet = 0 ){
    todo.meetings = todo.meetings+meet
 }

 let meetDone = function(todo,meet=0){
    todo.meetDone = todo.meetDone - meet
 }

 let resetDay = function(todo){
    todo.meetDone = 0
    todo.meetings = 0
 }
let getSummary = function(todo){
    let meetLeft = todo.meetings + todo.meetDone 
    return `you have ${meetLeft} meetings left`
}


 addMeeting(myTodos, 4)

 meetDone(myTodos , 2)

console.log(getSummary(myTodos))



 console.log(myTodos)