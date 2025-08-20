
let head=document.createElement("h1")
document.body.appendChild(head)
head.textContent=("Bulb ON/OFF")
head.style.textAlign="center"

let button = document.createElement("button")
document.body.appendChild(button)
button.textContent=("Turn On")
button.style.margin="10px "
button.style.backgroundColor="lightgreen"



let button2 = document.createElement("button")
document.body.appendChild(button2)
button2.textContent=("Turn Off")
button2.style.backgroundColor="red"



let img=document.createElement("img")
document.body.appendChild(img)
img.src= "https://www.w3schools.com/js/pic_bulboff.gif"
img.style.width="160px"
img.style.margin="20px 10px 30px 80px"


button.addEventListener("click",function(){
    img.src= "https://www.w3schools.com/js/pic_bulbon.gif"
})

button2.addEventListener("click",function(){
    img.src="https://www.w3schools.com/js/pic_bulboff.gif"
})
