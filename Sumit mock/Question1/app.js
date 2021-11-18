const numberOne = document.querySelector("#input-one");
const numberTwo = document.querySelector("#input-two");
const addBtn = document.querySelector("#add-btn");
const subBtn = document.querySelector("#sub-btn");
const mulBtn = document.querySelector("#multiply-btn");
const divBtn = document.querySelector("#division-btn");
const outputDiv = document.querySelector("#output");

addBtn.addEventListener('click', () => {
    outputDiv.innerText = Number(numberOne.value) + Number(numberTwo.value);
})





