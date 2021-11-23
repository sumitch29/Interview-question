let readlineSync = require('readline-sync');
let newsInput = readlineSync.question("Whats the news?\n");
let sourceInput = readlineSync.question("from where you get this news?\n").toLowerCase(); 

if(newsInput ==="whatsapp"  || newsInput==="facebook"){
  console.log("Dont beleive on fake news")
}else{
  console.log("news is correct")
}