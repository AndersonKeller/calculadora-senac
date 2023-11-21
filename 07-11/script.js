// const photos = [
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSLMAGL9doAZdTlu0FfXxV_T9NBbXAuP9xQ&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGZiVvvBqNp3dGzl4TwJdZn31LTKWZJ23kg&usqp=CAU"
// ]
const next = document.querySelector(".next")
let transformX = 200
next.addEventListener("click",()=>{
   const photo = document.querySelector(".gallery-photo")
   photo.classList.add("transform")
//    photo.setAttribute("style","transform: translateX(-200px)")
})