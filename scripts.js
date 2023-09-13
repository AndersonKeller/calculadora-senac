function sum(valor1,valor2){
    
    return valor1+valor2
}
function multiply(valor1,valor2){
    return valor1*valor2
}
function division(valor1,valor2){
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
const btnsCalculadora = document.querySelectorAll("button")
let array = [1,2,3]
array.forEach((item)=>{
    console.log(item)
})
for(let i =0;i<array.length;i++){
    console.log(array[i])
}
let stringCalculate = ""

btnsCalculadora.forEach((button)=>{
    const textResult = document.querySelector(".result-text")
    
    button.addEventListener("click",(event)=>{
        const valor1 = button.innerText
        if(textResult.innerText == "0"){
            textResult.innerText = ""
        }
        if(button.id == "clear"){
            textResult.innerText = "0"
        }
        else if(button.id == "sum"){
           const resultSum = sum(10,30)
           textResult.innerText = resultSum
        }else{
            textResult.innerText +=  button.innerText
        }
       
        
    })
})
