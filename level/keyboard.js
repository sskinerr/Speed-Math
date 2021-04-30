

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

function keyBoardOFF(){
   /* keyword on */
 if(keyOn == "on") {
keyOn = "off";
document.getElementById("keyword").style.bottom = "0px";
document.getElementById("keywordOf").style.bottom = "274px";
document.getElementById("contScoreText").style.top = "33%"
document.getElementById("gameOver").style.top = "19%";}
/* keyword off */
 else if(keyOn == "off"){
keyOn = "on";
document.getElementById("keyword").style.bottom = "-274px";
document.getElementById("keywordOf").style.bottom = "0px";
document.getElementById("contScoreText").style.top="43%"
document.getElementById("gameOver").style.top = "25%";}}
function keyBoardON() {
				if(keyOn == "off"){
 			      	keyOn = "on";
document.getElementById("keyword").style.transition = "0.0s"
document.getElementById("keyword").style.bottom = "-274px";
document.getElementById("keywordOf").style.transition = "0.0s"
document.getElementById("keywordOf").style.bottom = "0px";
document.getElementById("score").style.transition = "0.0s"
document.getElementById("score").style.marginTop = "50%"}}
