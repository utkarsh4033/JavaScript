// console.log("u")
// console.log("t")
// console.log("k")
// console.log("a")
// console.log("r")
// console.log("s")
// console.log("f")

// function name(){
// console.log("u")
// console.log("t")
// console.log("k")
// console.log("a")
// console.log("r")
// console.log("s")
// console.log("h")

// }
// name()

// function addTwoNumber(number1, number2){
//     return number1+number2
// }

// const result = (addTwoNumber(5,5))
// console.log(result);

function randomUser(username = "user"){
    if(!username){
         console.log("please enter your username")
         return
    }
    return `hello ${username}`
}

console.log(randomUser("utkarsh"));