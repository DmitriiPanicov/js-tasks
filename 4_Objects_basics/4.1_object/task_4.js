let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

function sumOf(object){
    let result = 0
    for (key in object){
        result += object[key]
    }
    return result
}

console.log(sumOf(salaries))