console.log("Hello Dame, Lets Begin!!!")
console.log("Fiver Demo")

function fiver(number){
    if(number % 2 === 0){
        if(number % 5 === 0){
            return "evenfiver"
        }
        return "even"
    } else {
        if(number % 5 === 0){
            return "oddfiver"
        }
        return "odd"
    }

}

// function fiver(number){
//     let isEven = number % 2 === 0
//     let isMultipleOf5 = number % 5 === 0
//     if(isEven){
//         if(isMultipleOf5){
//             return "evenfiver"
//         }
//         return "even"
//     }
// }
let result1 = fiver(123)
let result2 = fiver(126)
let result3 = fiver(130)
let result4 = fiver(125)
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)

