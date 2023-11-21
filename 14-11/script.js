
// async function getPokemons(){
    


// }
// getPokemons()
// const btn = document.createElement("button")
// btn.innerText = "GET"
// document.body.appendChild(btn)

// btn.addEventListener("click",async()=>{
//     const response = await fetch("https://pokeapi.co/api/v2")
//     const jsonResponse = await response.json()
//     console.log(jsonResponse)
// })
// const array = [1,2,3,4,5,67,64,2,3,9]
// array.forEach(async function getItens(item){await console.log(item)} )
// const res = array.filter((item)=> item>5)
// console.log(res)
// for(let i =0;i<array.length;i++){
//     await console.log("olha la")
// }

// const pokemonsList = jsonResponse.results
// console.log(pokemonsList)
// const obj = {
//     name: "Anderson",
//     fullName: "Keller"
// }
// console.log("objeto",obj)

// const objJson = JSON.stringify(obj)
// console.log("json",objJson) // json

// const returnObj = JSON.parse(objJson)
// console.log("return",returnObj)
const objeto = {
    id: 1,
    name: "Anderson",
    fullName: "keller"
}
const listaenderecos = [
    {
        userId:1,
        endereco: "Rua 1 do id 1"
    },
    {
        userId:2,
        endereco: "Rua 1 do id 1"
    },
]
for(let key in objeto){
    const findEndereco= listaenderecos.find((item)=>item.userId == objeto["id"])
    // console.log(findEndereco)
    objeto["endereco"] = findEndereco
}
console.log(objeto)