const myTodo = [{
    title : 'lets do',
    isDone : true
},{
    title:'wakeup',
    isDone : true
},{
    title:'brush your teeth',
    isDone:true
},{
    title : 'have a bath',
    isDone:true
},{
    title: 'move on',
    isDone: true
},{
    title:'still walking',
    isDone : false
}]

const search = myTodo.filter((title) => title.isDone === false)

const title = search.map((todo)=> todo.title)

console.log(title)