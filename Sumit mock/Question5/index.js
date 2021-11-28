var readlineSync = require('readline-sync');

const studentData = [] ; 
for(let i=1 ; i <=2 ; i++ ) {
  var student = {
    name : readlineSync.question(`Enter the name of student  ${i} \n` ),
     unitTestMark : Number(readlineSync.question("Enter the unit Test Mark of the student \n ")),
      preFinalMark :Number( readlineSync.question("Enter the pre Final Mark of the student \n")),
       finalMark :Number( readlineSync.question("Enter the final Mark  of the student \n")),
        sumTotalMark : function () {
      return  this.unitTestMark + this.preFinalMark + this.finalMark ;
    }
}
studentData.push(student) 
}

function getHighestMark (studentData) {
let highestScore= 0  ;
let topper = ' ' ;
for (let i=0 ; i <studentData.length ; i++) {
  let studentScore = studentData[i].sumTotalMark() 
  if (studentScore > highestScore ) {
    highestScore = studentScore;
    topper = studentData[i].name ;
  }
}

return topper ;

}

let rankHolder = getHighestMark(studentData);

console.log(  "topper is  "  +  rankHolder);

function getAverage (studentData) {
  let  sum = 0 ;
  
  for (let i = 0 ; i <studentData.length ; i++) {
    sum = sum + studentData[i].sumTotalMark()
  }
  var average = sum/2
  return average ;
}

let averageDisplay = getAverage(studentData) ;
console.log (averageDisplay)