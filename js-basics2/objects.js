const mySym = Symbol("mykey1");
const jsUser = {
   name: "Utkarsh",
   [mySym]:"mykey1",
   "full name": "utkarsh Sharma",  //this is not accesse by . method
   age: 21,
   email:"gvuvgrewuv@test.com"
}

// console.log(jsUser.email)
// console.log(jsUser['email'])
// console.log(typeof jsUser[mySym])
jsUser.email = "vdcutwef@wefdw.com"
// console.log(jsUser.email)
// // Object.freeze(jsUser)
// console.log(jsUser.email)


jsUser.greeting = function(){
    console.log("hello Js User")
}
jsUser.greetingTwo = function(){
    console.log(`hello Js User ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())