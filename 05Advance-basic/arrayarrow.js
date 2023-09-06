const myTodo = [{
    title : 'akhil'
    , isDone : true
},{
    title : 'athul',
    isDone : true
},{
    title : 'ajith-binu' ,
    isDone : true
}]

const letter = myTodo.filter((title) => 
     title.isDone === true

)

console.log(letter)