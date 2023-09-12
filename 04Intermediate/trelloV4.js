const myTodo = ['akhil','athul','ajith','binu']

// console.log(myTodo.indexOf('athul'))

// console.log(myTodo[myTodo.indexOf('athul')])

const newTodo = [{
    title : 'akhil',
    isDone : false,
},{
    title : 'athul',
    isDone : false,
},{
    title : 'ajith-binu' ,
    isDone : false,
}]

// const index = newTodo.findIndex(function(name,index){
//     console.log(name)
//     return name.title === 'athul'
   
// })

// console.log(index)
// ---------------------------------------------------Method1---------------------------------------------------------------------
// const found = function(todoload, title){
//     const search = todoload.findIndex(function(title1) {
//     return title1.title.toLowerCase() === title.toLowerCase()
       
//     })
//     return todoload[search]
// }
// let print = found(newTodo, 'ajith-Binu')
// console.log(print)

// ---------------------------------------------------Method2---------------------------------------------------------------------

// const found = function(todo,title){
//     const search = todo.find(function(value){
//         return value.title.toLowerCase() === title.toLowerCase()

//     })

//    return search
    
// }

// let print = found(newTodo, 'ajith-Binu')
// console.log(print)


// ------------------------------------------------------------------------------------------------------------------------------------

const akku = function(todoTitle , value){
    const search = todoTitle.find(function(value1){
        return value1.title.toLowerCase() === value.toLowerCase()
    })
    return search
}
let kit = akku(newTodo,'ajith-binu') 

console.log(kit)

