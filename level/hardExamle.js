/*оскільки все працює, чіпати тут нічого не потрібно. автор:
Instagram: @sskine.r
nazarzaleta@gmail.com 
zaletaroman00@gmail.com */

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
 	//перевірка необхідності темного режиму
 	var dark = localStorage.getItem("dMode");
 if(dark == "off"){
 darkModeOn();}
 
//якщо рекорд більший нуля) виведення на індикатор значення рекорду в цьому режимі (зліва верхній край)
if(localStorage.getItem("hardExRecord")>0){
document.getElementById("recordTop").innerHTML = localStorage.getItem("hardExRecord");}
 
//вмикання темного режиму off - увімкнений режим. on - вимикнений
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
//створення ефекту плавного появлення сторінки, чіпати не бажано
document.getElementById("bodyBlack").style.opacity = "0";	setTimeout(function(){document.getElementById("all").classList.add('body_visible');},0);
function redirect(){
document.getElementById("bodyDark").style.opacity="1";setTimeout('document.getElementById("all").style.opacity="0"',300);
setTimeout('window.location.href = "../index.html"',600)}

////////////////////////////////////

//функція для створення прикладу
 function math(){ 
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");
let text4 = document.getElementById("text4");
let text5 = document.getElementById("text5");
let text6 = document.getElementById("text6");
let text7 = document.getElementById("text7");

//отримання цифер для прикладу
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
 
//вибір одного з шаблонів для прикладу
let randomIndex = Math.floor(Math.random() * 10);

if(randomIndex == 0){

while (Math.sqrt(rnd3) % 1 != 0){rnd3++;}
while(rnd2 / Math.sqrt(rnd3) % 1 != 0){rnd2--}
result = rnd1 + rnd2 / Math.sqrt(rnd3) * rnd4;


 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = "&radic;" + rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "+";
 			text4.innerHTML = "&divide;";
			text6.innerHTML = "&times;";}


else if(randomIndex == 1){
while(Math.sqrt(rnd1) % 1 != 0){rnd1++;}
while(Math.sqrt(rnd1)*rnd2*rnd3/rnd4%1!=0){rnd4--} 
result = Math.sqrt(rnd1) * rnd2 * rnd3 / rnd4;
 			text1.innerHTML = "&radic;" + rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "&times;";
			text6.innerHTML = "&divide;";}
 	
 	
else if(randomIndex == 2){
while(rnd2 * rnd3 / rnd4 % 1 != 0){rnd4--}
 			result = rnd1 - rnd2 * rnd3 / rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "-";
 			text4.innerHTML = "&times;";
			text6.innerHTML = "&divide;";}
 	
else if(randomIndex == 3){
while(Math.sqrt(rnd1) % 1 != 0){rnd1++;}
while(Math.sqrt(rnd4) % 1 != 0){rnd4++;}
while(Math.sqrt(rnd1)*rnd2/rnd3 % 1 != 0){rnd3--}
result=Math.sqrt(rnd1)*rnd2/rnd3*Math.sqrt(rnd4);
 			text1.innerHTML = "&radic;" + rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = "&radic;" + rnd4;
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "&divide;";
			text6.innerHTML = "&times;";}

else if(randomIndex == 4){
 while(Math.sqrt(rnd1) % 1 != 0){rnd1++;}
 while(Math.sqrt(rnd2) % 1 != 0){rnd2++;}
 while(Math.sqrt(rnd3) % 1 != 0){rnd3++;}
 while(Math.sqrt(rnd4) % 1 != 0){rnd4++;}
   result = Math.sqrt(rnd1) * Math.sqrt(rnd2) * Math.sqrt(rnd3) * Math.sqrt(rnd4);
 			text1.innerHTML = "&radic;" + rnd1;
 			text3.innerHTML = "&radic;" + rnd2;
 			text5.innerHTML = "&radic;" + rnd3;
 			text7.innerHTML = "&radic;" + rnd4;
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "&times;";
			text6.innerHTML = "&times;";}

else if(randomIndex == 5){
 			result = rnd1 - rnd2 * rnd3 - rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "-";
 			text4.innerHTML = "&times;";
			text6.innerHTML = "-";}

else if(randomIndex == 6){
 			result = rnd1 + rnd2 + rnd3 + rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "+";
 			text4.innerHTML = "+";
			text6.innerHTML = "+";}
 	
else if(randomIndex == 7){
 			result = rnd1 * rnd2 * rnd3 * rnd4;
 			text1.innerHTML = rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "&times;";
			text6.innerHTML = "&times;";}
			
else if(randomIndex == 8){
while(Math.sqrt(rnd1) % 1 != 0){rnd1++;}
while(Math.sqrt(rnd4) % 1 != 0){rnd4++;}
while(Math.sqrt(rnd1)*rnd2*rnd3/rnd4%1!=0){rnd4--}
result=Math.sqrt(rnd1)*rnd2*rnd3*Math.sqrt(rnd4);
 			text1.innerHTML = "&radic;" + rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "&times;";
 			text4.innerHTML = "&times;";
			text6.innerHTML = "&divide;";}

else if(randomIndex == 9){
while (Math.sqrt(rnd3) % 1 != 0){rnd3++;}
while(rnd2 / Math.sqrt(rnd3) % 1 != 0){rnd2--}
result=Math.sqrt(rnd1)-rnd2/Math.sqrt(rnd3)*rnd4;
 			text1.innerHTML = "&radic;" + rnd1;
 			text3.innerHTML = rnd2;
 			text5.innerHTML = "&radic;" + rnd3;
 			text7.innerHTML = rnd4;
 			text2.innerHTML = "-";
 			text4.innerHTML = "&divide;";
			text6.innerHTML = "&times;";}
			
	if(result % 1 != 0){math()}
 colorC();
 result_skore()}
 
 
 //функція для підсвічення символів при зміні прикладу
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
 
 
//перевірка результату який вводить користувач
 function result_skore(){
 	var input = document.getElementById("input");
 if(input.value != result){
   	scoreLose = 0
   	setTimeout("result_skore()",150);}
 else{
   	scoreLose = 1
   	winLose()}}
 function winLose(){
 		 if(scoreLose == 1) {
 			win()
 	}else{
 			lose()}}


//функція програшу
 function lose(){
if(localStorage.getItem("hardExRecord")<scoreId){
localStorage.setItem("hardExRecord", scoreId);
document.getElementById("recordTop").innerHTML = localStorage.getItem("hardExRecord");}

  if (sound == "on"){loseEffect.play();}
 document.getElementById("scoreText").innerHTML = scoreId;scoreId = 0;maksRandome = 9;
document.getElementById("gameOver").style.transform = "translate(-50%,5%)";
document.getElementById('gameOver').style.transition = '0.5s'}

//функція перезапуску рівня
function gameReload(){
setTimeout("document.getElementById('gameOver').style.transform = 'translate(-50%,-1000px)';document.getElementById('gameOver').style.transition = '1.5s'",20);
document.getElementById("scoreUser").innerHTML = "0"
math()}
 
//функція оновлення прикладу при правильній відповіді користувача
 function win(){
 if (sound == "on"){winEffect.play()}
 	var score = document.getElementById("scoreUser");
 scoreId ++;
 score.innerHTML = scoreId; 
 math();
 document.getElementById("input").value = "";
 clearTimeout(timerId);
 timerId = setTimeout("winLose()", 6000);
 timer();}
 
//функція для індикатора таймеру
   function timer() {
   timerAnimation.style.transition = '0.4s'
   timerAnimation.style.width = 276+'px';
setTimeout("timerAnimation.style.width = 0+'px';timerAnimation.style.transition = 'linear 5.6s'",400)}
