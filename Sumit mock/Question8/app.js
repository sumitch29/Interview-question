const callBtn = document.querySelector("#call");
const outPut = document.querySelector("#output");

const URL = "https://unitube-server.herokuapp.com/playlists"

callBtn.addEventListener('click',clickHandler)

function clickHandler () {
    fetch(URL) 
    .then(response => response.json())
    .then(data => outPut.innerText = `${data.message}`)
}