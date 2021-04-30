setTimeout("document.getElementById('all'). style.opacity = '1'",500);

if(localStorage.getItem("dMode")=="off"){
setTimeout("document.getElementById('bodyDark').classList.add('body_visible');",10);}
else{
setTimeout("document.getElementById('bodyOrange').classList.add('body_visible');",10);}

if(sessionStorage.getItem('intro')!=1){
sessionStorage.setItem('intro',1);
setTimeout("document.getElementById('cont').style.opacity='1'",1000);
setTimeout("document.getElementById('cont').style.opacity='0'",4000);
setTimeout("document.getElementById('y').style.width='60%'",1500);
setTimeout("document.getElementById('b').style.width='60%'",1500);
setTimeout("document.getElementById('intro').style.opacity='0';document.getElementById('intro').style.zIndex='0'",6750);
}else{
document.getElementById('intro').style.transition='0';
document.getElementById('intro').style.opacity='0';
document.getElementById('intro').style.zIndex='0'}

function record(){
addInfo();

document.getElementById('recordcontainer').style.opacity = '1';
document.getElementById('recordcontainer').style.zIndex = '2000';}

function closeRec(){

document.getElementById('recordcontainer').style.opacity = '0';
document.getElementById('recordcontainer').style.zIndex = '0';}

let addRes = document.getElementById('addRes');
let subRes = document.getElementById('subRes');
let adSubRes=document.getElementById('adSubRes');
let multRes = document.getElementById('multRes');
let divRes = document.getElementById('divRes');
let multDivRes = document.getElementById('mDRes');
let rootRes = document.getElementById('rootRes');
let exampleRes=document.getElementById('exRes');
let degRes=document.getElementById('degreeRes');
let eqRes=document.getElementById('equalityRes');
let adHRes = document.getElementById('adHRes');
let mdHRes = document.getElementById('mdHRes');
let hRRes = document.getElementById('hRRes');
let hDRes = document.getElementById('hDRes');
let rndRes=document.getElementById('rndRes');
let hERes = document.getElementById('hERes');
let hEqRes = document.getElementById('hEqRes');

let addRecord=
localStorage.getItem("addRecord");
let subRecord=
localStorage.getItem("subRecord");
let addSubRecord=
localStorage.getItem("addSubRecord");
let multRecord=
localStorage.getItem("multRecord");
let divRecord=
localStorage.getItem("divRecord");
let mdRecord=
localStorage.getItem("mdRecord");
let sqrtRecord=
localStorage.getItem("sqrtRecord");
let degreeRecord=
localStorage.getItem("degreeRecord");
let exampleRecord= 
localStorage.getItem("exampleRecord");
let xRecord=
localStorage.getItem("xRecord");
let ASHRRecord=
localStorage.getItem("ASHRecord");
let mdHRecord=
localStorage.getItem("mdHRecord");
let sqrtHRecord=
localStorage.getItem("sqrtHRecord");
let hardDegRecord=
localStorage.getItem("hardDegRecord");
let randomeRecord=
localStorage.getItem("randomeRecord");
let hardExRecord=
localStorage.getItem("hardExRecord");
let hardEqualityRecord=
localStorage.getItem("hardEqualityRecord");

if(addRecord == null){
localStorage.setItem("addRecord",0)}
if(subRecord == null){
localStorage.setItem("subRecord",0)}
if(addSubRecord == null){
localStorage.setItem("addSubRecord",0)}
if(multRecord == null){
localStorage.setItem("multRecord",0)}
if(divRecord == null){
localStorage.setItem("divRecord",0)}
if(mdRecord == null){
localStorage.setItem("mdRecord",0)}
if(sqrtRecord == null){
localStorage.setItem("sqrtRecord",0)}
if(degreeRecord == null){
localStorage.setItem("degreeRecord",0)}
if(exampleRecord == null){
localStorage.setItem("exampleRecord",0)}

if(xRecord == null){
localStorage.setItem("xRecord",0)}
if(ASHRRecord == null){
localStorage.setItem("ASHRRecord",0)}
if(mdHRecord == null){
localStorage.setItem("mdHRecord",0)}
if(sqrtHRecord == null){
localStorage.setItem("sqrtHRecord",0)}
if(hardDegRecord == null){
localStorage.setItem("hardDegRecord",0)}
if(randomeRecord == null){
localStorage.setItem("randomeRecord",0)}
if(hardExRecord == null){
localStorage.setItem("hardExRecord",0)}
if(hardEqualityRecord == null){
localStorage.setItem("hardEqualityRecord",0)}

if(addRecord > 99){
addRes.className = "ultraRecord"}
else if(addRecord > 74){
addRes.style.color = "#ff000a"}
else if(addRecord > 49){
addRes.style.color = "#ffb200"}
else if(addRecord > 29){
addRes.style.color = "#3b00ff"}

if(subRecord > 99){
subRes.className = "ultraRecord"}
else if(subRecord > 74){
subRes.style.color = "#ff000a"}
else if(subRecord > 49){
subRes.style.color = "#ffb200"}
else if(subRecord > 29){
subRes.style.color = "#3b00ff"}

if(addSubRecord > 99){
adSubRes.className = "ultraRecord"}
else if(addSubRecord > 74){
adSubRes.style.color = "#ff000a"}
else if(addSubRecord > 49){
adSubRes.style.color = "#ffb200"}
else if(addSubRecord > 29){
adSubRes.style.color = "#3b00ff"}

if(multRecord > 59){
multRes.className = "ultraRecord"}
else if(multRecord > 44){
multRes.style.color = "#ff000a"}
else if(multRecord > 34){
multRes.style.color = "#ffb200"}
else if(multRecord > 24){
multRes.style.color = "#3b00ff"}

if(divRecord > 64){
divRes.className = "ultraRecord"}
else if(divRecord > 49){
divRes.style.color = "#ff000a"}
else if(divRecord > 39){
divRes.style.color = "#ffb200"}
else if(divRecord > 29){
divRes.style.color = "#3b00ff"}

if(mdRecord > 59){
multDivRes.className = "ultraRecord"}
else if(mdRecord > 44){
multDivRes.style.color = "#ff000a"}
else if(mdRecord > 34){
multDivRes.style.color = "#ffb200"}
else if(mdRecord > 24){
multDivRes.style.color = "#3b00ff"}

if(sqrtRecord > 79){
rootRes.className = "ultraRecord"}
else if(sqrtRecord > 63){
rootRes.style.color = "#ff000a"}
else if(sqrtRecord > 49){
rootRes.style.color = "#ffb200"}
else if(sqrtRecord > 29){
rootRes.style.color = "#3b00ff"}

if(degreeRecord > 49){
degreeRes.className = "ultraRecord"}
else if(degreeRecord > 39){
degreeRes.style.color = "#ff000a"}
else if(degreeRecord > 29){
degreeRes.style.color = "#ffb200"}
else if(degreeRecord > 19){
degreeRes.style.color = "#3b00ff"}

if(exampleRecord > 49){
exampleRes.className = "ultraRecord"}
else if(exampleRecord > 39){
exampleRes.style.color = "#ff000a"}
else if(exampleRecord > 29){
exampleRes.style.color = "#ffb200"}
else if(exampleRecord > 15){
exampleRes.style.color = "#3b00ff"}

if(xRecord > 49){
eqRes.className = "ultraRecord"}
else if(xRecord > 39){
eqRes.style.color = "#ff000a"}
else if(xRecord > 29){
eqRes.style.color = "#ffb200"}
else if(xRecord > 15){
eqRes.style.color = "#3b00ff"}

if(ASHRRecord > 69){
adHRes.className = "ultraRecord"}
else if(ASHRRecord > 44){
adHRes.style.color = "#ff000a"}
else if(ASHRRecord > 29){
adHRes.style.color = "#ffb200"}
else if(ASHRRecord > 19){
adHRes.style.color = "#3b00ff"}

if(mdHRecord > 59){
mdHRes.className = "ultraRecord"}
else if(mdHRecord > 24){
mdHRes.style.color = "#ff000a"}
else if(mdHRecord > 19){
mdHRes.style.color = "#ffb200"}
else if(mdHRecord > 14){
mdHRes.style.color = "#3b00ff"}

if(sqrtHRecord > 69){
hRRes.className = "ultraRecord"}
else if(sqrtHRecord > 49){
hRRes.style.color = "#ff000a"}
else if(sqrtHRecord > 34){
hRRes.style.color = "#ffb200"}
else if(sqrtHRecord > 24){
hRRes.style.color = "#3b00ff"}
 
if(hardDegRecord > 29){
hDRes.className = "ultraRecord"}
else if(hardDegRecord > 24){
hDRes.style.color = "#ff000a"}
else if(hardDegRecord > 19){
hDRes.style.color = "#ffb200"}
else if(hardDegRecord > 24){
hDRes.style.color = "#3b00ff"}

if(randomeRecord > 44){
rndRes.className = "ultraRecord"}
else if(randomeRecord > 34){
rndRes.style.color = "#ff000a"}
else if(randomeRecord > 29){
rndRes.style.color = "#ffb200"}
else if(randomeRecord > 19){
rndRes.style.color = "#3b00ff"}

if(hardExRecord > 44){
hERes.className = "ultraRecord"}
else if(hardExRecord > 34){
hERes.style.color = "#ff000a"}
else if(hardExRecord > 29){
hERes.style.color = "#ffb200"}
else if(hardExRecord > 19){
hERes.style.color = "#3b00ff"}

if(hardEqualityRecord > 44){
hEqRes.className = "ultraRecord"}
else if(hardEqualityRecord > 34){
hEqRes.style.color = "#ff000a"}
else if(hardEqualityRecord > 29){
hEqRes.style.color = "#ffb200"}
else if(hardEqualityRecord > 19){
hEqRes.style.color = "#3b00ff"}

addRes.innerHTML = addRecord;
subRes.innerHTML = subRecord;
adSubRes.innerHTML = addSubRecord;
multRes.innerHTML = multRecord;
divRes.innerHTML = divRecord;
multDivRes.innerHTML = mdRecord;
rootRes.innerHTML = sqrtRecord;
exampleRes.innerHTML = exampleRecord;
degRes.innerHTML = degreeRecord;
eqRes.innerHTML = xRecord;
adHRes.innerHTML = ASHRRecord;
mdHRes.innerHTML = mdHRecord;
hRRes.innerHTML = sqrtHRecord;
hDRes.innerHTML = hardDegRecord;
rndRes.innerHTML = randomeRecord;
hERes.innerHTML = hardExRecord;
hEqRes.innerHTML = hardEqualityRecord;


var add = "off";
function addInfo(){
if(add == "off"){
document.getElementById("addContainer").style.opacity="1";
document.getElementById("addContainer").style.zIndex = "2000"
add = "on";
document.getElementById("addInform").style.borderRadius = "0 0 7px 7px";

if(dark == "off"){
document.getElementById("addInform").style.color = "#c0c0c0";
}else{
document.getElementById("addInform").style.color = "white";}
setTimeout('document.getElementById("addInform").innerHTML = "close";document.getElementById("addInform").style.color = "black";',150);}

else{
document.getElementById("addContainer").style.opacity="0";
document.getElementById("addContainer").style.zIndex="-2";
add = "off";
document.getElementById("addInform").style.borderRadius = "7px";

if(dark == "off"){
document.getElementById("addInform").style.color = "#c0c0c0";
}else{
document.getElementById("addInform").style.color = "white";}

setTimeout('document.getElementById("addInform").innerHTML = "Additional Information";document.getElementById("addInform").style.color = "black";',150);}}

function contDev(){
addInfo();
document.getElementById('imgContact').style.opacity = "1";
document.getElementById('imgContact').style.zIndex= "2000"}

function closeContact(){
document.getElementById('imgContact').style.opacity = "0";
document.getElementById('imgContact').style.zIndex= "-1"}

function darkMode(){
document.getElementById("logo").style.filter = "invert(80%)";
document.getElementById("settings").style.border = "3px solid white";
document.getElementById("settings").style.background = "rgba(25,25,25, 0.90)"
document.getElementById("playText").style.background = "#c0c0c0";
document.getElementById("setText").style.background = "#c0c0c0";
document.getElementById("addInform").style.background = "#c0c0c0";
document.getElementById("howText").style.background = "#c0c0c0";
document.getElementById("selestText").style.background = "#969696";
document.getElementById("selestText").style.color = "black";
document.getElementById("closeLevel").style.background = "#969696";
document.getElementById("closeLevel").style.color = "black";
document.getElementById("boxLevel").style.background = "linear-gradient(45deg,#303040,#606060)";
document.getElementById("nextlevel").style.background = "#50c099";
document.getElementById("levels").style.opacity = "0.8";
document.getElementById("levels").style.filter = "grayscale(16%)";
document.getElementById("addContainer").style.background = "#c0c0c0";
document.getElementById("imgContact").style.background = "#c0c0c0";
document.getElementById("resultUser").style.background = "#c0c0c0";
document.getElementById("myRecordText").style.border = "2px solid #c0c0c0";
document.getElementById("myRecordText").style.borderBottom = "none";
document.getElementById("myRecordText").style.maxWidth = "332.7px";
document.getElementById("closeRecordText").style.border = "2px solid #c0c0c0";
document.getElementById("closeRecordText").style.borderTop = "none"
document.getElementById("closeRecordText").style.maxWidth = "333px"}

function darkModeOff(){
document.getElementById("logo").style.filter = "invert(0%)";
document.getElementById("settings").style.border = "3px solid black";
document.getElementById("settings").style.background = "rgba(0,0,0, 0.80)"
document.getElementById("playText").style.background = "white";
document.getElementById("setText").style.background = "white";
document.getElementById("addInform").style.background = "white";
document.getElementById("howText").style.background = "white";
document.getElementById("selestText").style.background = "black";
document.getElementById("selestText").style.color = "white";
document.getElementById("closeLevel").style.background = "black";
document.getElementById("closeLevel").style.color = "white";
document.getElementById("boxLevel").style.background = "linear-gradient(45deg,#0042ff,#408cff)";
document.getElementById("nextlevel").style.background = "#00d5ff";
document.getElementById("levels").style.opacity = "1";
document.getElementById("levels").style.filter = "grayscale(0%)";
document.getElementById("addContainer").style.background = "white";
document.getElementById("imgContact").style.background = "white";

document.getElementById("resultUser").style.background = "white";
document.getElementById("myRecordText").style.border = "none";
document.getElementById("myRecordText").style.maxWidth = "336.7px";
document.getElementById("closeRecordText").style.border = "none";
document.getElementById("closeRecordText").style.maxWidth = "338px"}

function body(){
document.getElementById("all").style.transition="1.2s";
setTimeout('document.getElementById("all").style.opacity="1"', 100);}

function play(){
document.getElementById("levels").style.zIndex="1000";
document.getElementById("nextlevel").style.zIndex="1000";
document.getElementById("selestLevel").style.opacity="1";
document.getElementById("selestLevel").style.zIndex= "1000";}

function settings(){
document.getElementById("settings").style.opacity = "1";
document.getElementById("settings").style.zIndex = "1000";}

function closeSett(){
document.getElementById("settings").style.opacity = "0";
document.getElementById("settings").style.zIndex = "0";}

function closeLevel(){
document.getElementById("selestLevel").style.opacity="0";
document.getElementById("selestLevel").style.zIndex= "-1";
setTimeout("prew()",500)}

function nextLevel(){
document.getElementById("nextlevel").style.opacity = "0";
document.getElementById("nextlevel").style.zIndex = "-3";
document.getElementById("levels").style.opacity="0";
document.getElementById("levels").style.zIndex="-3"
setTimeout('document.getElementById("levels2").style.opacity="1";document.getElementById("levels2").style.zIndex="999"',400);}


function prew(){
document.getElementById("levels2").style.zIndex="-3";
document.getElementById("levels2").style.opacity = "0";

document.getElementById("nextlevel").style.opacity = "1";
document.getElementById("nextlevel").style.zIndex="1000";
setTimeout('document.getElementById("levels").style.opacity = "1";document.getElementById("levels").style.zIndex="1000"',400);}

function howP(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location='howPlay.html'", 500);}

function redirectSub(){document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/sub.html'", 600);}

function redirectAdd(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/add.html'", 600);}

function redirectAddsub(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").click();
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/addsub.html'", 600);}

function multiplication(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/multiplication.html'", 600);}

function multDiv(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/multdiv.html'", 600);}

function root(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/sqrt.html'", 600);}

function example(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/example.html'", 600);}

function degree(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/degree.html'", 600);}

function redirectX(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/x.html'", 600);}

function division(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location.href='level/division.html'", 600);}

function ASHard(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location='level/addSubHard.html'", 600);}

function MDHard(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location='level/multDivHard.html'", 600);}

function sqrtHard(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location='level/sqrtHard.html'", 600);}

function degreeHard(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location='level/degreeHard.html'", 600);}

function exampleHard(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location='level/Hardexample.html'", 600);}

function random(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location='level/randomeLevel.html'", 600);}

function eqHard(){
document.getElementById("bodyBlack").style.opacity = "1";
document.getElementById("all").style.opacity="0";
setTimeout("window.location='level/hardEquality.html'", 600);}
