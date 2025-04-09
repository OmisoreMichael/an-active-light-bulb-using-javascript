// const images = [
//   "./pic_bulbon.gif",
//   "./pic_bulboff.gif"
// ]

let count = 0
let btn = document.getElementById("buttona")
let btnb = document.getElementById("buttonb")
// console.log(slider);
let slider = document.getElementById("slider")
// console.log(slider);

btn.addEventListener('click', TurnOn)
btnb.addEventListener('click', TurnOff  )

function TurnOn(){
 slider.src = "./pic_bulbon.gif"
 
}

function TurnOff(){
  slider.src = "./pic_bulboff.gif" 
}


// slider.src = images[count]
//  count = (count + 1) % images.length