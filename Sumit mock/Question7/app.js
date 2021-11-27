const inPut = document.querySelector("#input");
const callBtn = document.querySelector("#call-button");
const outputDiv = document.querySelector("#output");

var URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="


function clickHandler (text) {
    fetch(URL + text )
    .then(Response => Response.json()  ) 
    .then(data => {
            outputDiv.innerText = `${data.contents.translated} ${(data.contents.text).toUpperCase()}`
        }
    )
}

callBtn.addEventListener("click",function () {
    clickHandler(inPut.value)
} )