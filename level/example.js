 var result; 
 var maksRandome = 9;
 	var scoreLose;
 	var timerId;
 	var box;
 	var scoreId = 0;
 	var rnd1;
 	var rnd2;
 	var keyOn = "off";
 	var winEffect = new Audio('correct.mp3');
 	var loseEffect = new Audio('lose.mp3');
 	sound = localStorage.getItem("sound");
 	
if(localStorage.getItem("exampleRecord") > 0){
document.getElementById("recordTop").innerHTML = localStorage.getItem("exampleRecord");}
 	document.getElementById("bodyBlack").style.opacity = "0";
 	
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

 
////////////////////////////////////////////

 function math(){
 
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let text5 = document.getElementById("text5");
let text6 = document.getElementById("text6");
let text7 = document.getElementById("text7");

 maksRandome ++;
 rnd1 = 
 Math.floor(Math.random() * maksRandome);
 rnd2 = 
 Math.floor(Math.random() * maksRandome);
 rnd3 = 
 Math.floor(Math.random() * maksRandome);
 rnd4 = 
 Math.floor(Math.random() * maksRandome);
 
let randomeValue = ["+--", "-++","---","+++","-+-","+-+","--+","++-"];
let randomIndex = Math.floor(Math.random() * 9);

 if(randomeValue[randomIndex] == "+--") {
 			result = rnd1 + rnd2 - rnd3 - rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "+";
 			text4.innerHTML = "-";
			text6.innerHTML = "-";}
 		    	
 	else if(randomeValue[randomIndex] == "-++"){
 			result = rnd1 - rnd2 + rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "-";
 			text4.innerHTML = "+";
			text6.innerHTML = "+";}
 	
 	else if(randomeValue[randomIndex] == "---"){
 			result = rnd1 - rnd2 - rnd3 - rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "-";
 			text4.innerHTML = "-";
			text6.innerHTML = "-";}
 	
 	else if(randomeValue[randomIndex] == "+-+"){
 			result = rnd1 + rnd2 - rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "+";
 			text4.innerHTML = "-";
			text6.innerHTML = "+";}

 else if(randomeValue[randomIndex] == "++-"){
 			result = rnd1 + rnd2 + rnd3 - rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "+";
 			text4.innerHTML = "+";
			text6.innerHTML = "-";}
 			
 	else if(randomeValue[randomIndex] == "--+"){
 			result = rnd1 - rnd2 - rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "-";
 			text4.innerHTML = "-";
			text6.innerHTML = "+";}

 else if(randomeValue[randomIndex] == "-+-"){
 			result = rnd1 - rnd2 + rnd3 - rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "-";
 			text4.innerHTML = "+";
			text6.innerHTML = "-";}
 	
 	else if(randomeValue[randomIndex] == "+++"){
 			result = rnd1 + rnd2 + rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "+";
 			text4.innerHTML = "+";
			text6.innerHTML = "+";}

  colorC();
 result_skore()}

  function colorC(){
document.getElementById("text2").style.transition = '0s'; 
 	document.getElementById("text2").style.color = 'red';
 	 setTimeout('document.getElementById("text2").style.color = "black";document.getElementById("text2").style.transition = "all 0.6s"',50);
  //////////////////////////////////
document.getElementById("text4").style.transition = '0s'; 
 	document.getElementById("text4").style.color = 'red';
 	 setTimeout('document.getElementById("text4").style.color = "black";document.getElementById("text4").style.transition = "all 0.6s"',50);
  ///////////////////////////////////
 document.getElementById("text6").style.transition = '0s'; 
 	document.getElementById("text6").style.color = 'red';
 	 setTimeout('document.getElementById("text6").style.color = "black";document.getElementById("text6").style.transition = "all 0.6s"',50);}
 
 
 function result_skore(){
 	var input = document.getElementById("input");
 if(input.value != result){
   	scoreLose = 0
   	setTimeout("result_skore()",100);}
  else{
   	scoreLose = 1
   	winLose()}
 if(input.value == "-1488-"){
 	document.getElementById("input").value = "";
 scoreId = 1487;
 maksRandome = 1400;
 win()}}
 
 
 
 function winLose(){
 		 if(scoreLose == 1) {
 				 win()
 				}else{
 				 lose()}}

 function lose(){
if(localStorage.getItem("exampleRecord")<scoreId){
localStorage.setItem("exampleRecord", scoreId);
document.getElementById("recordTop").innerHTML = localStorage.getItem("exampleRecord");}
 
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
 if(sound == "on"){winEffect.play()}
 
 	var score = document.getElementById("scoreUser");
 	
 scoreId ++;
 
 score.innerHTML = scoreId; 
 math();
 
 document.getElementById("input").value = "";
 
 clearTimeout(timerId);
 timerId = setTimeout("winLose()", 12000);
 timer();}
 
   function timer() {
   timerAnimation.style.transition = '0.4s'
   timerAnimation.style.width = 276+'px';
setTimeout("timerAnimation.style.width = 0+'px';timerAnimation.style.transition = 'linear 11.6s'",400)}
