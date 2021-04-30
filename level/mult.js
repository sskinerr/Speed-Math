 var result; 
 var maksRandome = 1;
 	var scoreLose;
 	var timerId;
 	var box;
 	var scoreId = 0;
 	var rnd1;
 	var rnd2;
 	var keyOn = "off";
 	var winEffect = new Audio('correct.mp3');
 	var loseEffect = new Audio('lose.mp3');
 	sound = localStorage.getItem("sound");	document.getElementById("bodyBlack").style.opacity = "0";
 	
 	if(localStorage.getItem("multRecord")>0){
document.getElementById("recordTop").innerHTML = localStorage.getItem("multRecord");}

 	setTimeout(function(){document.getElementById("all").classList.add('body_visible');
},0);
function redirect(){
document.getElementById("bodyDark").style.opacity="1"
setTimeout('document.getElementById("all").style.opacity="0"',300)
setTimeout('window.location.href = "../index.html"',600)}
////////////////////////////////////
 var dark = localStorage.getItem("dMode");
 if(dark == "off"){
 darkModeOn();} 
function darkModeOn(){
document.getElementById("body").style.background = "linear-gradient(10deg,black,#2e2e2e)";
document.getElementById("keyword").style.background = "linear-gradient(#747474,#959595)"; 
document.getElementById("keywordOf").style.background = "#747474";
document.getElementById("keywordOf").style.filter = "grayscale(50%)";
document.getElementById("text").style.background = "linear-gradient(45deg,#b5b5b5,#eeeeee)";
document.getElementById("input").style.background = "linear-gradient(45deg,#cacaca,#e9e9e9)"; 
document.getElementById("timerAnimation").style.background = "#44cd47";
document.getElementById("score").style.background = "#44cd47";
document.getElementById("top").style.background = "#747474";}
 	
 	/* keyboard */
function keyB(){
let str = document.getElementById("input"). value.slice(0, document.getElementById("input").value.length-1);
document.getElementById("input").value = str;} 	
function keyM(){document.getElementById("input"). value += "-"}
function key0(){document.getElementById("input"). value += "0"}
function key1(){document.getElementById("input"). value += "1"}
function key2(){document.getElementById("input"). value += "2"}
function key3(){document.getElementById("input"). value += "3"}
function key4(){document.getElementById("input"). value += "4"}
function key5(){document.getElementById("input"). value += "5"}
function key6(){document.getElementById("input"). value += "6"}
function key7(){document.getElementById("input"). value += "7"}
function key8(){document.getElementById("input"). value += "8"}
function key9(){document.getElementById("input"). value += "9"}

////////////////////////////////////////////

 function math(){
 
 var a = document.getElementById("a");
 var b = document.getElementById("b");
 var c = document.getElementById("c");

 maksRandome += 0.65;
 rnd1 = 
 Math.floor(Math.random() * maksRandome);
 rnd2 = 
 Math.floor(Math.random() * maksRandome);
 
 if(rnd1 == 0){
 rnd1 = 1;}
 if(rnd2 == 0){
 rnd2 = 1}
 
 result = rnd1 * rnd2;
 
  a.innerHTML = rnd1;
  b.innerHTML = rnd2;
 result_skore()}
 
 
 
 function result_skore(){
 	var input = document.getElementById("input");
 	
 if(input.value != result){
   	scoreLose = 0
   	setTimeout("result_skore()",200);}
  else{
   	scoreLose = 1
   	winLose()}}
 
 
 
 function winLose(){
 		 if(scoreLose == 1) {
 				 win()
 				}else{
 				 lose()}}



 function lose(){
 if(localStorage.getItem("multRecord")<scoreId){
localStorage.setItem("multRecord", scoreId);
document.getElementById("recordTop").innerHTML = localStorage.getItem("multRecord");}
 
  if (sound == "on"){loseEffect.play();}
 document.getElementById("scoreText").innerHTML = scoreId;
 scoreId = 0;
 maksRandome = 9;

document.getElementById("gameOver").style.transform = "translate(-50%,5%)";
document.getElementById('gameOver').style.transition = '0.5s'}

 function gameReload(){
 
setTimeout("document.getElementById('gameOver').style.transform = 'translate(-50%,-1000px)';document.getElementById('gameOver').style.transition = '1.5s'",20);
 
document.getElementById("scoreUser").innerHTML = "0"
math()}
 
 
 
 function win(){
 if (sound == "on"){winEffect.play()}
 
 	var score = document.getElementById("scoreUser");
 	
 scoreId ++;
 
 score.innerHTML = scoreId; 
 math();
 
 document.getElementById("input").value = "";
 
 clearTimeout(timerId);
 timerId = setTimeout("winLose()", 8000);
 timer();}
 
 
   function timer() {
   timerAnimation.style.transition = '0.4s'
   timerAnimation.style.width = 276+'px';
setTimeout("timerAnimation.style.width = 0+'px';timerAnimation.style.transition = '7.7s'",400)}
