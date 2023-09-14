function sum(valor1,valor2){
    
    return valor1+valor2
}
function multiply(valor1,valor2){
    return valor1*valor2
}
function division(valor1,valor2){
    if(valor1==0||valor2==0){
        return 1
    }
    return valor1/valor2
}
function sub(valor1,valor2){
    let result = valor1 - valor2
    console.log(result)
    return result
}
// const myFunction = ()=>{
// }
// myFunction()
// const btnResult = document.getElementById("result")
// btnResult.addEventListener("click",()=>{
//     const textResult = document.querySelector(".result-text")
//     const resultSub = sub(20,10)
//     textResult.innerText = resultSub
// })
// // const textResult = document.getElementsByClassName("result-text")
// // console.log(textResult[0])
// const textResult = document.querySelector(".result-text")
// console.log(textResult)
const display = document.querySelector(".display")
const calculationSpan = document.createElement("span")
calculationSpan.classList.add("calculation")
display.appendChild(calculationSpan)

const btnsCalculadora = document.querySelectorAll("button")
let array = [1,2,3]
array.forEach((item)=>{
    // console.log(item)
})
for(let i =0;i<array.length;i++){
    // console.log(array[i])
}
let stringCalculate = ""

// btnsCalculadora.forEach((button)=>{
//     const textResult = document.querySelector(".result-text")
    
//     button.addEventListener("click",(event)=>{
        
//         if(button.id == "clear"){
//             textResult.innerText = "0"
//             calculationSpan.innerText = ""
//         }else if(button.id == "result"){
//             let resultCalculation =""
//             console.log(calculationSpan.innerText)
//             if(calculationSpan.innerText.includes("+")){
//                 const numbers = calculationSpan.innerText.split("+")
//                 console.log(numbers)
//                 resultCalculation = sum(parseInt(numbers[0]),parseInt(numbers[1]))  
//             }else if(calculationSpan.innerText.includes("-")){
//                 const numbers = calculationSpan.innerText.split("-")
//                 console.log(numbers)
//                 resultCalculation = sub(parseInt(numbers[0]),parseInt(numbers[1]))
//             }else if(calculationSpan.innerText.includes("X")){
//                 const numbers = calculationSpan.innerText.split("X")
//                 console.log(numbers)
//                 resultCalculation = multiply(parseInt(numbers[0]),parseInt(numbers[1]))
//             }else if(calculationSpan.innerText.includes("/")){
//                 const numbers = calculationSpan.innerText.split("/")
//                 console.log(numbers)
//                 resultCalculation = division(parseInt(numbers[0]),parseInt(numbers[1]))
//             }
//             textResult.innerText = resultCalculation
//         }
//         else{
//             calculationSpan.innerText += button.innerText
//         }
        
//     })
// })
const user = localStorage.getItem("dark-mode-preference")
console.log(user)
if(user){
    const body = document.body
    body.classList.add("no-dark-mode")
}
const darkButton = document.querySelector("#dark-mode")
darkButton.addEventListener("click",()=>{
    const user = localStorage.getItem("dark-mode-preference")
    if(!user){
        localStorage.setItem("dark-mode-preference","dark")
    }
    
    console.log(user)
    const body = document.body
    body.classList.toggle("no-dark-mode")
    if(body.classList.contains("no-dark-mode")){
       
         localStorage.setItem("dark-mode-preference","no-dark")
    }else{
        localStorage.setItem("dark-mode-preference","dark")
    }
})
