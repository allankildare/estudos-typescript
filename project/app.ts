// string | number eh um tipo de union type
function concat(
    input1: number | string,
    input2: number | string,
    resultConversion: 'as number' | 'as text') {
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}

let sumNumbers = concat(1, 3, 'as number')
console.log(sumNumbers)

sumNumbers = concat('10', '5', 'as number')
console.log(sumNumbers)

const addNames = concat('Allan', 'Kildare', 'as text')
console.log(addNames)