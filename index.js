function retake(){
 
const chalk = require('chalk');
 
console.log(chalk.yellow.bold('Hello and  welcome to the quiz about india \n'));

console.log(chalk.bold("important: there will be four options for every question and you have to choose by typing the equivalent correct option eg: a,b,c,d \n=> you will be awarded two marks for each correct answer \n=> one marks will be deducted for each wrong answer \n"))


var readlineSync = require('readline-sync');

var score=0
var username = readlineSync.question(chalk.italic.bold("what is your name? \t"));
console.log(chalk.red.inverse.underline.bold("\n welcome", username))
console.log("\n")
var username = readlineSync.question(chalk.bold.whiteBright("do you know about india? let see how much you know type 'yes' to start the quiz? "));

console.log("\n")

if(username==="yes"){

function quiz(question , answer){
      
      var userAns = readlineSync.question(chalk.underline.bold(question,chalk.red.bold( "\n[choose your option by writing a/b/c/d]==>>")));
       
      console.log("you entered ",userAns)
      if(answer===userAns){
        console.log(chalk.bgWhiteBright.black.bold("RIGHT ANSWER"))
        score=score+2
        console.log(chalk.green.bold("your score increased by 2 : and now it becomes"),score)
      }
      else{
        console.log(chalk.bgRed.bold("WRONG ANSWER"))
        score=score-1
        console.log(chalk.red.bold("your score is decreased by 1 : and now it becomes "),score )
      }
      console.log("\n")
}


var quescontainer=[
  {ques:"1. what indian city is the capital of two states?  \n a.kolkata \n b.mumbai \n c.chandigarh \n d.chennai \n" , ans:"c"},

  {ques:"2. what is india's smallest state by area?   \n a.uttar pradesh \n b.bihar \n c.kerala \n d.goa \n", ans:"d"},

  {ques:"3. in what state is Bengaluru located?  \n a.karnataka \n b.kerala \n c.gujrat \n d.orissa \n",ans:"a"},

  {ques:"4. what is the currency of india?  \n a.Dollar \n b.Rupee \n c.Euro \n d.yen \n", ans:"b"},

  {ques:"5. which indian festival is associated with colors?  \n a.Diwali \n b.pongal \n c.onam \n d.holi \n",ans:"d"},

  {ques:"6. which is the most populous state in india?  \n a.Rajasthan \n b.Bihar \n c.Uttar pradesh \n d.Maharastra \n",ans:"c"},

  {ques:"7. which indian festival is known as the festival of lights?  \n a.holi \n b.Diwali \n c.onan \n d.Dussehra \n",ans:"b"},

  {ques:"8. who was the first indian citizen to go into space?  \n a.kalpana chawala \n b.sunita williams \n c.Rakesh sharma \n d.Ravish Malhotra \n",ans:"c"},

  {ques:"9. which is the national tree of india?  \n a.Banyan \n b.peepal \n c.neem \n d.Mango \n",ans:"a"},

   {ques:"10. which indian city is known as the silicon valley of india?  \n a.Bengaluru \n b.New Delhi \n c.Hyderabad \n d.Mumbai \n",ans:"a"}

]

for( var i=0;i<quescontainer.length;i++){
  quiz(quescontainer[i].ques,quescontainer[i].ans)
 
}



console.log(chalk.green("your total score",score))
console.log("\n")

var highscorer = readlineSync.question(chalk.bold("do you want to see highest scorer list? type 'yes' "));

if(highscorer==="yes"){
  var highscorecondidates=[
    {name:"sailesh",score:"18"},
    {name:"saurabh",score:"16"},
    {name:'aman',score:"15"},
    {name:"rahul",score:"10"}
  ]
  var yourscore=[
    {name:"you",yourscore: score}
  ]


  if(yourscore[0].yourscore>highscorecondidates[0].score){
    highscorecondidates[0].name=chalk.bgWhiteBright.bold.redBright("your score")
    highscorecondidates[0].score=chalk.bold.bgCyanBright.black(yourscore[0].yourscore)
   }

  else if(yourscore[0].yourscore>highscorecondidates[1].score){
    highscorecondidates[1].name=chalk.bgWhiteBright.bold.redBright("your score")
    highscorecondidates[1].score=chalk.bold.bgCyanBright.black(yourscore[0].yourscore)
   }

  else if(yourscore[0].yourscore>highscorecondidates[2].score){
    highscorecondidates[2].name=chalk.bgWhiteBright.bold.redBright("your score")
    highscorecondidates[2].score=chalk.bold.bgCyanBright.black(yourscore[0].yourscore)
   }

   else if(yourscore[0].yourscore>highscorecondidates[3].score){
    highscorecondidates[3].name=chalk.bgWhiteBright.bold.redBright("your score")
    highscorecondidates[3].score=chalk.bold.bgCyanBright.black(yourscore[0].yourscore)
   }
 
  for(let j=0;j<highscorecondidates.length;j++){
    console.log(chalk.whiteBright.redBright("name:",highscorecondidates[j].name))
    console.log(chalk.bold.red("score:",highscorecondidates[j].score))
  }

}else{
  console.log("------------------------")
}





}else{

  console.log("you dont know about india so you cant play this game because this game is about india so learn about india before playing this quiz game \n")
}
}



retake()


const chalk = require('chalk');
var readlineSync = require('readline-sync');
var username = readlineSync.question(chalk.bold(" \n if you want to retake the quiz type 'yes'?"));
if(username==="yes"){
    retake()
}
else{
  console.log(chalk.italic("thanks for attempting quiz"))
}

