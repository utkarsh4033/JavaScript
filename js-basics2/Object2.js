const regularUser = {
    email: "dvgfedy@test.com",
    fullname:{
        username:{
            firstName :"Utkarsh",
            lastName:"Sharma"
        }

    }
}
// console.log(regularUser['fullname']['username']['firstName'])

// Merging objects

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3)