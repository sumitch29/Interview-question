const callBtn = document.querySelector('#callbtn');
const outputDiv = document.querySelector('#output');

const URL = "https://unitube-server.herokuapp.com/playlists"
//const URL = " "https://jsonplaceholder.typicode.com/dummyUsers"

callBtn.addEventListener('click',clickHandler)

function clickHandler(){
    fetch(URL)
        .then(error=>{
            if(error.status === 401){
            outputDiv.innerText = 'you are not logged in'
        }else if(error.status === 404){
            outputDiv.innerText = 'page not found'
        }
        })        
    }