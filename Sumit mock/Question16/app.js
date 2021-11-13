const checkBtn = document.querySelector("#find")
const outPut = document.querySelector("#output")

let ramData = {
    name: "ram",
    power: "2500",
    yuga: "Treta"
}
let KrishnaData = {
    name: "krishna",
    power: "2325",
    yuga: "Dwapar"
}


function totalPower(ramData, krishnaData){
    const totalPowerRam = (Number(ramData.power) + Number(ramData.name.length)) * 35;
    const totalPowerKrishna = (Number(krishnaData.power) + Number(krishnaData.name.length)) * 35;
    if(totalPowerRam > totalPowerKrishna){
        outPut.innerText = `Ram is more powerful, ram has power=${totalPowerRam} and krishna power=${totalPowerKrishna}`
    }else{
        outPut.innerText = `krishna is more powerful,  ram has power=${totalPowerRam} and krishna power=${totalPowerKrishna}`
    }
}

checkBtn.addEventListener("click",function (){totalPower(ramData,KrishnaData)})