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
 	var inputX;
 	sound = localStorage.getItem("sound");
if(localStorage.getItem("hardEqualityRecord")>0){
document.getElementById("recordTop").innerHTML = localStorage.getItem("hardEqualityRecord");}
 	
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


//////////////////////////////////

function keyBoardOFF(){

   /* keyword on */
 if(keyOn == "on") {
 				keyOn = "off"
 	
 	
document.getElementById("keyword").style.bottom = "0px";

document.getElementById("keywordOf").style.bottom = "274px";

document.getElementById("contScoreText").style.top = "33%"}

/* keyword off */
 else if(keyOn == "off"){
keyOn = "on"
 

document.getElementById("keyword").style.bottom = "-274px";

document.getElementById("keywordOf").style.bottom = "0px";

document.getElementById("contScoreText").style.top="43%"}}



function keyBoardON() {
				if(keyOn == "off"){
 			      	keyOn = "on" 			      	 			      	
 			      	
document.getElementById("keyword").style.transition = "0.0s"
document.getElementById("keyword").style.bottom = "-274px";
document.getElementById("keywordOf").style.transition = "0.0s"
document.getElementById("keywordOf").style.bottom = "0px";
document.getElementById("score").style.transition = "0.0s"
document.getElementById("score").style.marginTop = "50%"}}

let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let text5 = document.getElementById("text5");
let text6 = document.getElementById("text6");
let text7 = document.getElementById("text7");

////////////////////////////////////////////

 function math(){

 maksRandome ++;
 
 rnd1 = 
 Math.floor(Math.random() * maksRandome);
 rnd2 = 
 Math.floor(Math.random() * maksRandome);
 rnd3 = 
 Math.floor(Math.random() * maksRandome);
 rnd4 = 
 Math.floor(Math.random() * maksRandome);
 if(rnd1==0){rnd1++}
 if(rnd2==0){rnd2++}
 if(rnd3==0){rnd3++}
 if(rnd4==0){rnd4++}

let randomIndex = Math.floor(Math.random() * 8);

 if(randomIndex == 0) {
 while (Math.sqrt(rnd4) % 1 != 0){rnd4++;}
 while (rnd2 / rnd3  % 1 != 0){rnd3--}
 			result = rnd1 + rnd2 / rnd3 * Math.sqrt(rnd4);
 			text1.innerHTML = "x";
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = "&radic;" + rnd4;
 			text2.innerHTML = "+";
 			text4.innerHTML = "&divide;";
			text6.innerHTML = "&times;";
			inputX = rnd1;
			text9.innerHTML = result;}
 		    	
 	else if(randomIndex == 1){
 	while (Math.sqrt(rnd3) % 1 != 0){rnd3++;}
 while (Math.sqrt(rnd3) / rnd4  % 1 != 0){rnd4--}
 			result = rnd1 * rnd2 + Math.sqrt(rnd3) / rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = "x";
 			text5.innerHTML = "&radic;" + rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "+";
			text6.innerHTML = "&divide;";
			inputX = rnd2;
			text9.innerHTML = result;}
 	
 	else if(randomIndex == 2){
 	while (Math.sqrt(rnd1) % 1 != 0){rnd1++;}
 	while (Math.sqrt(rnd2) % 1 != 0){rnd2++;}
 	while (Math.sqrt(rnd4) % 1 != 0){rnd4++;}
 			result = Math.sqrt(rnd1) * Math.sqrt(rnd2) * rnd3 * Math.sqrt(rnd4);
 			text1.innerHTML = "&radic;" + rnd1;
 			text3.innerHTML = "&radic;" + rnd2;
 			text5.innerHTML = "x";
 			text7.innerHTML = "&radic;" + rnd4;
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "&times;";
			text6.innerHTML = "&times;";
			inputX = rnd3;
			text9.innerHTML = result;}
 	
 	else if(randomIndex == 3){
 	while(rnd1*rnd2*rnd3/rnd4 %1!=0){rnd4--} 	
 			result = rnd1 * rnd2 * rnd3 / rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = "x";
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "&times;";
			text6.innerHTML = "&divide;";
			inputX = rnd4;
			text9.innerHTML = result;}

 else if(randomIndex == 4){
 while(Math.sqrt(rnd3) %1!=0){rnd3++}
 			result=rnd1*(-rnd2)+Math.sqrt(rnd3)+rnd4;
 			text1.innerHTML = "x";
 			text3.innerHTML = "(-"+rnd2+")";
 			text5.innerHTML = "&radic;"+rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "+";
			text6.innerHTML = "+";
			inputX = rnd1;
			text9.innerHTML = result;}
 			
 	else if(randomIndex == 5){
while(Math.sqrt(rnd1) %1!=0){rnd1++}
while(Math.sqrt(rnd2) %1!=0){rnd2++}
while(Math.sqrt(rnd3) %1!=0){rnd3++}
result=Math.sqrt(rnd1)-Math.sqrt(rnd2)- Math.sqrt(rnd3)-rnd4;
 			text1.innerHTML = "&radic;"+rnd1;
 			text3.innerHTML = "&radic;"+rnd2;
 			text5.innerHTML = "&radic;"+rnd3;
 			text7.innerHTML = "x";
 			text2.innerHTML = "-";
 			text4.innerHTML = "-";
			text6.innerHTML = "-";
			inputX = rnd4;
			text9.innerHTML = result;}

 else if(randomIndex == 6){
 			result = rnd1 + rnd2 + rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = "x";
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "+";
 			text4.innerHTML = "+";
			text6.innerHTML = "+";
			inputX = rnd2;
			text9.innerHTML = result;}
 	
 	else if(randomIndex == 7){
 while (rnd1 * rnd2 / rnd3  % 1 != 0){rnd3--}
 			result = rnd1 * rnd2 / rnd3 * rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = "x";
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "&divide;";
			text6.innerHTML = "&times";
			inputX = rnd4;
			text9.innerHTML = result;}
			if(result == undefined){math()}
			
			
   colorC();
   result_skore()}
 
 

  function colorC(){
document.getElementById("text2").style.transition = '0s'; 
 	document.getElementById("text2").style.color = 'red'; setTimeout('document.getElementById("text2").style.color = "black";document.getElementById("text2").style.transition = "all 0.6s"',50);
  //////////////////////////////////
document.getElementById("text4").style.transition = '0s'; 
 	document.getElementById("text4").style.color = 'red'; setTimeout('document.getElementById("text4").style.color = "black";document.getElementById("text4").style.transition = "all 0.6s"',50);
 	 
 document.getElementById("text6").style.transition = '0s'; 
 	document.getElementById("text6").style.color = 'red'; setTimeout('document.getElementById("text6").style.color = "black";document.getElementById("text6").style.transition = "all 0.6s"',50);}
 
 function result_skore(){
 	var input = document.getElementById("input");
 	
 if(input.value != inputX){
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
  if (sound == "on"){loseEffect.play();}
 document.getElementById("scoreText").innerHTML = scoreId;
  
if(localStorage.getItem("hardEqualityRecord")<scoreId){
localStorage.setItem("hardEqualityRecord", scoreId);
document.getElementById("recordTop").innerHTML = localStorage.getItem("hardEqualityRecord");
scoreId = 0;
maksRandome = 9;}


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
 timerId = setTimeout("winLose()", 5000);
 timer();}
 
   function timer() {
   timerAnimation.style.transition = '0.4s'
   timerAnimation.style.width = 276+'px';
setTimeout("timerAnimation.style.width = 0+'px';timerAnimation.style.transition = 'linear 4.6s'",400)}
