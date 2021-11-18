const checkBtn = document.querySelector("#find-btn");
const outPut = document.querySelector("#output");

let ramData = {
    age: "27",
    power: "2500",
    yuga: "Treta",
    name: "ram",
}

let krishnaData = {
    age: "30",
    power: "2800",
    yuga: "Dwaper",
    name: "krishna",
}

function powerCalc(ramData, krishnaData){
    if(ramData.power > krishnaData.power){
        outPut.innerText = `${ramData.name} is more powerful`
    }else{
        outPut.innerText = `${krishnaData.name} is more powerful`
    }
}


checkBtn.addEventListener('click',function(){powerCalc(ramData, krishnaData)})