const inPut = document.querySelector("#input");
const checkBtn = document.querySelector("#checkbutton");
const outPut = document.querySelector("#output");

checkBtn.disabled = true

inPut.addEventListener("input", function () {
    let value = inPut.value;
    if (value.length < 10) {
        checkBtn.disabled = true;
        inPut.style.border =  " 1rem solid red "
        outPut.innerText = 'error'
    } else {
        checkBtn.disabled = false;
    }
})


checkBtn.addEventListener('click',()=>{
    let value = inPut.value;

    if (value.length < 10) {
        checkBtn.disabled = true;

    } else {
        checkBtn.disabled = false;
        inPut.style.border =  " 1rem solid green "
        outPut.innerText = 'successful'
        outPut.style.color =  "green "
    }
});