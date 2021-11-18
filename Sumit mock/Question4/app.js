const inPut = document.querySelector("#input");
const redBtn = document.querySelector("#redBtn");
const outputDiv = document.querySelector("#output");

inPut.addEventListener('input',() =>{
    outputDiv.innerText = inPut.value
})

redBtn.addEventListener('click',redcolor)

function redcolor(){
    outputDiv.style.color = "red"
}