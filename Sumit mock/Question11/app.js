const inPut = document.querySelector("#input");
const checkBtn = document.querySelector("#checkbutton");
const outPut = document.querySelector("#output");

checkBtn.disabled = true;

inPut.addEventListener('input',enableBtn)

function enableBtn(){
    if(inPut.value.length >= 10){
            checkBtn.disabled = false
            outPut.innerText = "Success"
            inPut.style.border = "1rem solid green"
    }else{
        outPut.innerText = "Error"
        inPut.style.border = "1rem solid red"
    }
}