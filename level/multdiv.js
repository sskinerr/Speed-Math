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
 	document.getElementById("bodyBlack").style.opacity = "0";
 	
if(localStorage.getItem("mdRecord")>0){
document.getElementById("recordTop").innerHTML = localStorage.getItem("mdRecord");}
 	
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
 
 var a = document.getElementById("a");
 var b = document.getElementById("b");
 var c = document.getElementById("c");

 maksRandome += 1;
 rnd1 = 
 Math.floor(Math.random() * maksRandome);
 rnd2 = 
 Math.floor(Math.random() * maksRandome);
 
 let randomeValue = ["*", "/"];
 let randomIndex = Math.floor(Math.random() * 2);

 if(randomeValue[randomIndex] == "*") {
 
 			    	if(rnd1 == 0){
						 rnd1 = 1;}
						 if(rnd2 == 0){
						 rnd2 = 1}
 
						 result = rnd1 * rnd2;
 			   	
 	  		   	c.innerHTML = "&#215;"}
 		    	
 	else if(randomeValue[randomIndex] == "/"){
 	
						if(rnd1 == 0){rnd1++}
						if(rnd2 == 0){rnd2++}

						while(rnd1 % rnd2 != 0){
						if(rnd2>rnd1){[rnd1, rnd2] = [rnd2, rnd1];}
						rnd1++}

						result=rnd1/rnd2;
 			   	
 			   	c.innerHTML = "&#247;"}
 
  a.innerHTML = rnd1;
  b.innerHTML = rnd2;
  colorC();
 result_skore()}

 function colorC(){
 document.getElementById("c").style.transition = '0s'; 
 	document.getElementById("c").style.color = 'red'
  setTimeout('document.getElementById("c").style.color = "black";document.getElementById("c").style.transition = "all 0.6s"',50)}
 
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
 if(localStorage.getItem("mdRecord")<scoreId){
localStorage.setItem("mdRecord", scoreId);
document.getElementById("recordTop").innerHTML = localStorage.getItem("mdRecord");}
 
  if (sound == "on"){loseEffect.play();}
 document.getElementById("scoreText").innerHTML = scoreId;
 scoreId = 0;
 maksRandome = 9;
document.getElementById("gameOver").style.transform = "translate(-50%,5%)";
document.getElementById('gameOver').style.transition = '0.5s'}

function gameReload(){
setTimeout("document.getElementById('gameOver').style.transform = 'translate(-50%,-1000px)';document.getElementById('gameOver').style.transition = '1.5s'",20);
document.getElementById("scoreUser").innerHTML = "0";
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
setTimeout("timerAnimation.style.width = 0+'px';timerAnimation.style.transition = 'linear 7.47s'",400)}
