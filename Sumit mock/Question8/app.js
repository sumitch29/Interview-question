const callBtn = document.querySelector("#call");
const outPut = document.querySelector("#output");

const URL = "https://jsonplaceholder.typicode.com/dummyUsers"

function clickHandler(){
    fetch(URL)
    .then(error =>{
            if(error.status === 401){
                outPut.innerText = `${error.status} you are not logged in`
            }else{
                outPut.innerText = `${error.status} page not found`
            }
        })
    }

callBtn.addEventListener('click',clickHandler);