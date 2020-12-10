var countdown = document.querySelector(".countdown");
function startTheShow(){
  setTimeout(redLightStart,0);
}
function redLightStart(){
   let redLight = parseInt(document.querySelector(".in1").value);
    document.querySelector(".red").style.backgroundColor = "#fd3a69";
    document.querySelector(".green").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.querySelector(".yellow").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
   var stopRed = setInterval(function(){
    if(redLight<=0){
      clearInterval(stopRed);
      yellowLightShow();
     }
    redLight = redLight<10 ? "0" + redLight : redLight;
    countdown.innerHTML = "0:" + redLight;
    redLight--;
   },1000);
}
function yellowLightShow(){
  let yellowLight = 3;
    document.querySelector(".red").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.querySelector(".green").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    document.querySelector(".yellow").style.backgroundColor = "#ffc85c";
    var stopYellow = setInterval(function(){
    if(yellowLight<=0){
      clearInterval(stopYellow);
      greenLightShow();
     }
      countdown.innerHTML = "0:0" + yellowLight;
      yellowLight--;
    },1000);
}
function greenLightShow(){
  let greenLight = parseInt(document.querySelector(".in2").value);
  document.querySelector(".red").style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  document.querySelector(".green").style.backgroundColor = "#5aa469";
  document.querySelector(".yellow").style.backgroundColor = " rgba(0, 0, 0, 0.1)";
  var stopGreen = setInterval(function(){ 
    if(greenLight<=0){
      clearInterval(stopGreen);
      redLightStart();
     }
    greenLight = greenLight<10 ? "0" + greenLight : greenLight;
    countdown.innerHTML = "0:" +greenLight;
    greenLight--;
  },1000)

}
