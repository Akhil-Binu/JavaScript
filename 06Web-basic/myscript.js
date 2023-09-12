// alert('file is attached') // this will show a pop up file is attached


// console.log(document) // here it load the entire html document in console

// console.log(document.body) // here it will load content inside tag

// console.log(document.documentURI) // here it will print the url of web page


// the above are used to get data  from html file 

// document.title = 'my name is akhil' // by using this we can change title in html file

// console.log(document.getElementById('done')) // here in case we can't assign a value

// document.getElementById('done') = 'akhil' // we are going to get an error


// we can also get class also in similar way

// console.log(document.getElementsByClassName('classdone')) // her it select the class with classname written in paragrapghs

// console.log(document.querySelector('p')) //here it select the p element or p tag

// console.log(document.querySelectorAll('p')) // this will select all the p tag

// console.log(document.querySelectorAll('p')[0]) // here it will list all p tag all the p tage is stored like in an array 
// and the first array elemnt or first p tag will be selected in the case using the same method we can select the 
// id and classes also in case of class in n use .classname in case of id use #idname


// console.log(document.querySelectorAll('.classdone'))

// console.log(document.querySelectorAll('#done'))

// const akku = document.querySelector('p') // to change content in p tag
// akku.textContent = 'akhil is a good boy'




// const kera = document.querySelectorAll('p')

// kera.forEach((p) =>  p.textContent='akhil changed the content')


const arr = document.createElement('p')
arr.textContent = ' this is craeted using js '

document.querySelector('body').appendChild(arr)

document.querySelector('button').addEventListener('click', ()=>{
    alert('button was pressed');

}
);