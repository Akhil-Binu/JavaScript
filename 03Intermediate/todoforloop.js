const Todo = []

Todo.push('wakeup')
Todo.push("polish your shoes")
Todo.push("brush your teeth")

// for(let i = Todo.length - 1 ; i >=0 ; i-- )
for(let i = 0; i < Todo.length ; i++)
{

    console.log(`here the task is ${i+1} :  ${Todo[i]}`)
}