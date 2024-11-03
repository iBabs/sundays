// alert("Hello Class!!!")

/*
This is a multi-line comment
We are trying out the types
of comments in JavaScript
*/

// var let const


let fast = "Ford F-150"

console.log(fast)

fast = "Lamborgini Urus"
console.log(fast)

const num = 20

console.log(num)

const bigerNum = num + num


let num2 = 2

// num2 +=  2

// num2++
// num2++

console.log(num2)
// const username = prompt("What is your name?")
// const beSure = confirm("Are you sure you want to continue?")

// if(beSure){
//     alert( "welcome " + username+"!!!")
// }

// const trans = parseInt(prompt("Please select an option\n1. Check Balance\n2. By recharge card\n3. Buy data\n4' call customer care"))

// switch(trans){
//     case 1:
//         alert("Your Balance is 2,000")
//         break
//     case 2:
//         alert("You have select to buy recharge card")
//         break
//     case 3:
//         alert("You have select to buy data")
//         break
//     case 4:
//         alert("You have select to call customer care")
//         break
//     default:
//         alert("You entered a wrong number")
// }

// function greet(visitor = "user"){
//     alert(`Welcome ${visitor}!!!`)
// }

// function add(x,y){
//     console.log(x*y)
// }
// add(52,10)

// greet("Yomi")


const foods = ["Rice", "Beans", "Yam", "Egusi", "Amala", "Ewedu"]

const newfoods = ["Pounded Yam", "Egusi", "Amala", "Ewedu"]
// console.log("Original",foods)

const allFoods = foods.concat(newfoods)

// console.log(allFoods)

// foods.pop()
// foods.push("Fufu")
// foods.shift()
// foods.unshift("Plantain")

// foods.splice(2,0, "Oha","Eba")
// foods.splice(4,1, "Porridge", "Calamari")
// console.log("altered", foods)


// const student= {
//     name: "Lekan",
//     age: 20,
//     gender: "Male",
//     hobbies: ["Football", "Basketball", "Coding"],
//     married: false
    
// }
// console.log("Original",student)

// student.grade = "B+"
// student.married = true

// delete student.married

// console.log("Altered",student)


// let x = 0
//  ||
// while(x < 1000){
//     console.log(x, "I love you")
//     x++
// }
//  const pin ="1234"

//  let userPin = prompt("Please enter your pin")
// let count = 0
//  while(userPin !== pin && count < 3){
//     count++
//     userPin = prompt("Please enter correct pin")
//  }