
var desc = document.getElementsByClassName("desc");
var bttn1 = document.getElementsByClassName("bttn1");
var bttn2 = document.getElementsByClassName("bttn2");
function ocultar(x){
 desc[x].style.display = "none";
bttn1[x].style.display = "none";
bttn2[x].style.display = "block";
}
function mostrar(y){
 desc[y].style.display = "block";
bttn1[y].style.display = "block";
bttn2[y].style.display = "none";
}
