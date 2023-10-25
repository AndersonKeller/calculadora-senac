
async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const resJson = await response.json()

    console.log(resJson)
    renderPosts(resJson)
}
main()
function renderPosts(list=[]){
    const ul = document.querySelector("ul")
    list.forEach((item)=>{
        ul.insertAdjacentHTML("beforeend",`
    <li>
        <h3>${item.title}</h3>
        <p>${item.body}</p>
    </li>
    `)
    })
}