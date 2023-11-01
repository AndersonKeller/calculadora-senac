//FILTER
// dado um array, retorna um filtro 
// somente com os elementos que satisfaçam
//uma determinada condição

const array1 = [1,2,3,4,5,6,7,8]

const result = array1.filter((item)=>item>15)
// console.log(result)
// console.log(array1)
function myCallback(item){
    if(item==5){
        return item
    }
}

// const res = myFilter(array1,myCallback)

function myFilter(list=[],callback){
    let result = []
    for(let i=0;i<list.length;i++){
        const res = callback(list[i])
        if(res){
            result.push(callback(list[i]))
        }
    }
    return result
}
// trutly
    // "sasd", "[]" "{}"
// falsy
    // 0, udefined, null, NaN
const num1 = 1
const num2 = 1
//  console.log(num1 + num2)
console.log(num1 === num2)

//FIND
// dado um array, retorna o primeiro elemento 
// que satisfaça alguma condição, se não encontrar
// retorna undefined
const array2 = [1,2,3,4,80,90,76,10]
function callbackFind(item){

}
function myFind(list=[],callback){

}
const res = myFind(array2,callbackFind)
console.log(res)
//FINDINDEX
//dado um array, retorna o index do primeiro elemento
// que satisfaça alguma condição,
// se não encontrar, retorna -1
function callbackFindIndex(item){

}
function myFindIndex(list=[],callback){

}
const resIndex = myFindIndex(array2,callbackFindIndex)
console.log(resIndex)

//MAP
// dado um array, retornar um novo array
// com o mesmo tamanho, com os itens resultantes
// de uma função callback
function callbackMAp(item){

}
function myMap(list=[],callback){

}
const resultMap = myMap(array2,callbackMAp)
console.log(resultMap)
//REDUCE
//dado um array, retorna todos os itens
// resumidos a um unico valor
const reduceArray = [
    {
        id:1,
        price:500,
        descont: 30

    },
    {
        id: 2,
        price:1000,
        descont: 0
    },
    {
        id:3,
        price:400,
        descont: 15
    }
]

let blackfriday = true
const resultReduce = reduceArray.reduce((prev,next)=>{
    console.log("prev", prev)
    console.log("next", next)
    let multiply = 1- next.descont/100
    
    // condicao?retorno true:retorno false
    next.price>500?next.price +=100:next.price += 200
    // if(next.price>500){
    //     next.price +=100
    // }else{
    //     next.price += 200
    // }

    return prev + (next.price * multiply)
},0)
console.log(resultReduce)

const numeroPar = resultReduce>1500 ? "ok":"quase la"

console.log(numeroPar)