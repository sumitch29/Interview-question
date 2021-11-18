const checkBtn = document.querySelector("#check-button");
const outPut = document.querySelector("#output");

let ramData = {
    name: "ram",
    age: "35",
    yug:"Treta"
}

let krishnaData ={
    name:"krishna",
    age: "31",
    yug: "Dwaper"
}

function checkAge(ramData, krishnaData){
    if(ramData.age < krishnaData.age){
        outPut.innerText = `${krishnaData.name} is elder` } else{
            outPut.innerText = `${ramData.name} is elder`
        }
}

checkBtn.addEventListener('click',function(){checkAge(ramData, krishnaData)})