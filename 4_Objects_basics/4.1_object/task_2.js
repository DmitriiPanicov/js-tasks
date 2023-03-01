function isEmpty(object) {
    for (let key in object) {
        return false
    }
    return true
}

let someObjectOne = {
    name: 'asd',
}
let someObjectTwo = {

}

console.log(isEmpty(someObjectOne))
console.log(isEmpty(someObjectTwo))