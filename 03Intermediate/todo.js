const myTodo = []

myTodo.push('akhil')
myTodo.push('athul')
myTodo.push('ajith')
myTodo.push('binu')

myTodo.forEach(

    function(name,index){

        console.log(`array index is ${index+1} the value is ${name}`)

    }
)