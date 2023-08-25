const array = ['one','two','three','four','five','six']

// array[1]= 'findit'

array.shift()
array.unshift('akku')

console.log("the element to be deleted is : "+array.pop())

array.push('seven')


console.log(array)

array.splice(2,1,'india')

console.log(array)