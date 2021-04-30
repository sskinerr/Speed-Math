var music = "on";
var sound = "on";
var dark;


function dModeSave(){
dark = localStorage.getItem("dMode");
if(dark == "off"){
darkMode();
document.getElementById("dMode").checked = true;}}

function dMode(){
if(dark == localStorage.getItem("z")){
dark = "on";}
if(dark == "off"){
document.getElementById("bodyDark").style.background = "linear-gradient(10deg,#ff8800,#ffbd15)";
document.getElementById("bodyOrange").style.background = "linear-gradient(10deg,#ff8800,#ffbd15)";
darkModeOff();
dark = "on";
dModeOn();}

else if(dark == "on"){
document.getElementById("bodyOrange").style.background = "linear-gradient(10deg,black,#2e2e2e)";
document.getElementById("bodyDark").style.background = "linear-gradient(10deg,black,#2e2e2e)";
darkMode();
dark = "off";
dModeOff();}}

function dModeOn(){
localStorage.setItem("dMode",dark);}
function dModeOff(){
dark = "off";
localStorage.setItem("dMode",dark);}


function soundSave(){
sound = localStorage.getItem("sound");
if(sound == "off"){
document.getElementById("soundSett").checked = true;}}

function soundSett(){
if(sound == localStorage.getItem("z")){
sound = "off";}
if(sound == "on"){
sound = "off";
soundOff()
}else if(sound == "off"){
sound = "on";
soundOn()}}
function soundOff(){
localStorage.setItem("sound", sound);}
function soundOn(){
localStorage.setItem("sound", sound);}


/* || || || || || || || || || || || || ||  */
function musicSave(){
music = localStorage.getItem("music");
if(music == "off"){
document.getElementById("musicSett").checked = true;}}
function musicSett(){
if(music == localStorage.getItem("z")){
music = "on";}
if(music == "on"){
music = "off";
musicOff()
}else if(music == "off"){
music = "on";
musicOn()}}
function musicOff(){
localStorage.setItem("music", music);}
function musicOn(){
localStorage.setItem("music", music);}
