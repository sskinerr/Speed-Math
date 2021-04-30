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
 var input = document.getElementById("input");
 var score = document.getElementById("scoreUser");
 let text1 = document.getElementById("text1");
 let text2 = document.getElementById("text2");
 let text3 = document.getElementById("text3");
 let text4 = document.getElementById("text4");
 let text5 = document.getElementById("text5");
 let text6 = document.getElementById("text6");
 let text7 = document.getElementById("text7");
 let text8 = document.getElementById("text8");
 let text9 = document.getElementById("text9");
 let rndLev, rnd5, inputX, X, all;
document.getElementById("bodyBlack").style.opacity = "0";

if(localStorage.getItem("randomeRecord")>0){
document.getElementById("recordTop").innerHTML = localStorage.getItem("randomeRecord");} 


setTimeout(function(){document.getElementById("all").classList.add('body_visible');},0);function redirect(){document.getElementById("bodyDark").style.opacity="1";setTimeout('document.getElementById("all").style.opacity="0"',300);setTimeout('window.location.href = "../index.html"',600)}
////////////////////////////////////
 var dark = localStorage.getItem("dMode");
 if(dark == "off"){darkModeOn();}
 
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
 rnd1 = 
 Math.floor(Math.random() * maksRandome);
 rnd2 = 
 Math.floor(Math.random() * maksRandome);
 rnd3 = 
 Math.floor(Math.random() * maksRandome);
 rnd4 = 
 Math.floor(Math.random() * maksRandome);
 
//setInterval('document.getElementById("lol").click()',15);
 
  function randomeLevel(){
  rndLev = Math.floor(Math.random() * 13);
  if(rndLev == 0){add()}
  else if(rndLev == 1){sub()}
  else if(rndLev == 3){subAdd()}
  else if(rndLev == 4){addSub()}
  else if(rndLev == 5){mult()}
  else if(rndLev == 6){division()}
  else if(rndLev == 7){sqrt()}
  else if(rndLev == 8){multdiv()}
  else if(rndLev == 9){divmult()}
  else if(rndLev == 10){degree()}
  else if(rndLev == 11){x()}
  else if(rndLev == 12){example()}
  else{randomeLevel()}}
 
  function add(){ 
  result = rnd1 + rnd2;  
  text1.innerHTML = rnd1;
  text2.innerHTML = "+";
  text3.innerHTML = rnd2;
  result_skore();}
  
  function sub(){   
  result = rnd1 - rnd2;  
  text1.innerHTML = rnd1;
  text2.innerHTML = "-";
  text3.innerHTML = rnd2;
  result_skore();}
  
  function subAdd(){ 
  result = rnd1 - rnd2 + rnd3;  
  text1.innerHTML = rnd1;
  text2.innerHTML = "-";
  text3.innerHTML = rnd2;
  text4.innerHTML = "+";
  text5.innerHTML = rnd3;
  result_skore();}
  
  function addSub(){ 
  result = rnd1 + rnd2 - rnd3;  
  text1.innerHTML = rnd1;
  text2.innerHTML = "+";
  text3.innerHTML = rnd2;
  text4.innerHTML = "-";
  text5.innerHTML = rnd3;
  result_skore();}
  
  function mult(){ 
  result = rnd1 * rnd2;  
  text1.innerHTML = rnd1;
  text2.innerHTML = "&times;";
  text3.innerHTML = rnd2;
  result_skore();}
  
  function division(){
  while (rnd1 / rnd2 % 1 != 0){rnd1++;}
  result = rnd1 / rnd2;  
  text1.innerHTML = rnd1;
  text2.innerHTML = "&divide;";
  text3.innerHTML = rnd2;
  result_skore();}
  
  function divmult(){ 
  while (rnd1 / rnd2 % 1 != 0){rnd2--;}
  result = rnd1 / rnd2 * rnd3;  
  text1.innerHTML = rnd1;
  text2.innerHTML = "&divide;";
  text3.innerHTML = rnd2;
  text4.innerHTML = "&times;";
  text5.innerHTML = rnd3;
  result_skore();}
  
  function multdiv(){ 
  while (rnd1 * rnd2 / rnd3 % 1 != 0){rnd3--;}
  result = rnd1 * rnd2 / rnd3;
  text1.innerHTML = rnd1;
  text2.innerHTML = "&divide;";
  text3.innerHTML = rnd2;
  text4.innerHTML = "&times;";
  text5.innerHTML = rnd3;
  result_skore();}
  
  function sqrt(){
  while (Math.sqrt(rnd1) % 1 != 0){rnd1++}
  result = Math.sqrt(rnd1)
  text1.innerHTML = "&radic;" + rnd1;
  result_skore();}
  
  function degree(){
  rnd5 = 
  Math.floor(Math.random() * 4)
  if(rnd5 < 2){rnd5 = 2}
  result = rnd1 ** rnd5;
  text1.innerHTML = rnd1;
  text8.innerHTML = rnd5;
  result_skore();}
  
  function x(){
  text9.innerHTML = " <br> X=</b>";
  X = 1;
  let randomeValue = ["+--", "-++","---","+++","-+-","+-+","--+","++-"];
let randomIndex = Math.floor(Math.random() * 9);

 if(randomeValue[randomIndex] == "+--") {
 			all = rnd1 + rnd2 - rnd3 - rnd4;
 			text1.innerHTML = "x";
 			text2.innerHTML = "+";
 			text3.innerHTML = rnd2;
 			text4.innerHTML = "-";
 			text5.innerHTML = rnd3;
 			text6.innerHTML = "-";
 			text7.innerHTML = rnd4+"="+all;
			result = rnd1;}
 		    	
 	else if(randomeValue[randomIndex] == "-++"){
 		 all = rnd1 - rnd2 + rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = "x";
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4+"="+all;
 			text2.innerHTML = "-";
 			text4.innerHTML = "+";
			text6.innerHTML = "+";
			result = rnd2;}
 	
 	else if(randomeValue[randomIndex] == "---"){
 			all = rnd1 - rnd2 - rnd3 - rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = "x";
 			text7.innerHTML = rnd4+"="+all;
 			text2.innerHTML = "-";
 			text4.innerHTML = "-";
			text6.innerHTML = "-";
			result = rnd3;}
 	
 	else if(randomeValue[randomIndex] == "+-+"){
 			all = rnd1 + rnd2 - rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = "x"+"="+all;
 			text2.innerHTML = "+";
 			text4.innerHTML = "-";
			text6.innerHTML = "+";
			result = rnd4;}

 else if(randomeValue[randomIndex] == "++-"){
 			all = rnd1 + rnd2 + rnd3 - rnd4;
 			text1.innerHTML = "x";
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4+"="+all;
 			text2.innerHTML = "+";
 			text4.innerHTML = "+";
			text6.innerHTML = "-";
			result = rnd1;}
 			
 	else if(randomeValue[randomIndex] == "--+"){
 			all = rnd1 - rnd2 - rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = "x";
 			text7.innerHTML = rnd4+"="+all;
 			text2.innerHTML = "-";
 			text4.innerHTML = "-";
			text6.innerHTML = "+";
			result = rnd3;}

 else if(randomeValue[randomIndex] == "-+-"){
 			all = rnd1 - rnd2 + rnd3 - rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = "x";
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4+"="+all;
 			text2.innerHTML = "-";
 			text4.innerHTML = "+";
			text6.innerHTML = "-";
			result = rnd2;}
 	
 	else if(randomeValue[randomIndex] == "+++"){
 			all = rnd1 + rnd2 + rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = "x"+"="+all;
 			text2.innerHTML = "+";
 			text4.innerHTML = "+";
			text6.innerHTML = "+";
			result = rnd4;}
			if(result == undefined){x()}
   result_skore()}
   
   
   function example(){
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
			result_skore();}
  
 
 function result_skore(){
 if(input.value != result){
 scoreLose = 0;
 setTimeout("result_skore()",100);
 }else{
 scoreLose = 1;	
 winLose()}}
 
function winLose(){
if(scoreLose == 1){win()}else{lose()}}

 function lose(){
 if (sound == "on"){loseEffect.play();}
 document.getElementById("scoreText").innerHTML = scoreId;
if(localStorage.getItem("randomeRecord")<scoreId){
localStorage.setItem("randomeRecord", scoreId);
document.getElementById("recordTop").innerHTML = localStorage.getItem("randomeRecord");}
scoreId = 0;maksRandome = 9;
document.getElementById("gameOver").style.transform = "translate(-50%,5%)";
document.getElementById('gameOver').style.transition = '0.5s';}


function gameReload(){
text1.innerHTML = "";
text2.innerHTML = "";
text3.innerHTML = "";
text4.innerHTML = "";
text5.innerHTML = "";
text6.innerHTML = "";
text7.innerHTML = "";
text8.innerHTML = "";
setTimeout("document.getElementById('gameOver').style.transform='translate(-50%,-1000px)';document.getElementById('gameOver').style.transition='1.5s'",20);
document.getElementById("scoreUser").innerHTML="0"
randomeLevel()
timerAnimation.style.transition = '0.4s'
timerAnimation.style.width = 276+'px';
	rnd1 = 	Math.floor(Math.random() * maksRandome);
 rnd2 = Math.floor(Math.random() * maksRandome);
 rnd3 = Math.floor(Math.random() * maksRandome);
 rnd4 = Math.floor(Math.random() * maksRandome);
 rnd5 = Math.floor(Math.random() * 4);
 if(rnd1 < 2){rnd1 = 2}
 if(rnd2 < 2){rnd2 = 2}
 if(rnd3 < 2){rnd3 = 2}
 if(rnd4 < 2){rnd4 = 2}}
 
 
 function win(){
 clearTimeout(timerId);
 maksRandome += 1.5;
 if (sound == "on"){winEffect.play()}
 document.getElementById("input").value = "";
 	rnd1 = 	Math.floor(Math.random() * maksRandome);
 rnd2 = Math.floor(Math.random() * maksRandome);
 rnd3 = Math.floor(Math.random() * maksRandome);
 rnd4 = Math.floor(Math.random() * maksRandome);
 rnd5 = Math.floor(Math.random() * 4);
 if(rnd1 < 2){rnd1 = 2}
 if(rnd2 < 2){rnd2 = 2}
 if(rnd3 < 2){rnd3 = 2}
 if(rnd4 < 2){rnd4 = 2}
text1.innerHTML = "";
text2.innerHTML = "";
text3.innerHTML = "";
text4.innerHTML = "";
text5.innerHTML = "";
text6.innerHTML = "";
text7.innerHTML = "";
text8.innerHTML = "";
 scoreId ++; 
 score.innerHTML = scoreId;
 timerId = setTimeout("winLose()", 4500);
 if(X = 1){X = 0;text9.innerHTML = "="}
 timer();randomeLevel();}
 
 
   function timer(){
   timerAnimation.style.transition = '0.4s'
   timerAnimation.style.width = 276+'px';
setTimeout("timerAnimation.style.width=0+'px';timerAnimation.style.transition='4s'",400)}
