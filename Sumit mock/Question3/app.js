const inPut = document.querySelector("#input-text");
const hOne = document.querySelector("#h1");
const hTwo = document.querySelector("#h2");
const hThree = document.querySelector("#h3");
const outputDiv = document.querySelector("#output");

hOne.addEventListener('click',headingone)

function headingone(){
    outputDiv.innerHTML = `<h1>${inPut.value}<h1/>`
}
