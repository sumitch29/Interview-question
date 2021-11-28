const callBtn = document.querySelector("#call");
const outPut = document.querySelector("#output");

const URL = "https://unitube-server.herokuapp.com/playlists"

callBtn.addEventListener('click',clickHandler)

// function clickHandler () {
//     fetch(URL) 
//     .then(response => response.json())
//     .then(data => outPut.innerText = `${data.message}`)
// }

// function clickHandler(){
//     fetch(URL)
//     .then(response =>{
//         if(response.status === 404){
//             outPut.innerText = response.status
//         }
//     })
// }

// function clickHandler () {
//     fetch(URL) 
//     .then(response => {
//         if (response.status === 401 ) {
//              outPut.innerText=  response.statusText  
 
//               console.log(response);     
//         }
//     }
//     )
// }


function clickHandler () {
    fetch(URL) 
    .then(response =>  outPut.innerText = `${response.status}  ${response.message}`)
}
