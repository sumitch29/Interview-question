let outPut = document.querySelector("#output");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
let inPut = document.querySelector("#input");


addBtn.addEventListener('click',addCounter);
subBtn.addEventListener('click',subCounter);


function addCounter(){
    let counterInit = inPut.innerText
    inPut.innerText = Number(counterInit) + 1
}


function subCounter(){
    let counterInit = inPut.innerText
    inPut.innerText = Number(counterInit) - 1
}

