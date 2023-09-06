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

// const search = myTodo.filter((title) => title.isDone === false)

// const title = search.map((todo)=> todo.title)

// console.log(title)

const camera = {
    name : 'canon',
    weight : 600 ,
    price : 2000,

    myDes: function(){
        return `the price of the camera is ${this.price}` // here we can also use camera.price also
    }
}

// console.log(camera.myDes())


// this is a redux sample
// const func = () => ({key:'value'});