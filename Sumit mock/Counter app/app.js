const inPut = document.querySelector("#input");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const outPut = document.querySelector("#output");



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

