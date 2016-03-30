var mainCanvas = document.getElementById("myCanvas");

var mainContext = mainCanvas.getContext("2d");

var canvasWidth = mainCanvas.width;

var canvasHeight = mainCanvas.height;

var angle = 0;

var requestAnimationFrame = window.requestAnimationFrame;

function drawCircle() {
  mainContext.clearRect(0,0, canvasWidth, canvasHeight);
  
  //Color in the background
  mainContext.fillStyle = "grey";
  mainContext.fillRect(0,0,canvasWidth, canvasHeight);
 
  //draw black circle
  mainContext.beginPath();

  var radius = 25 + 150 * Math.abs(Math.cos(angle));
  mainContext.arc(225,225, radius, 0, Math.PI*2,false);
  mainContext.closePath();
  
  mainContext.fillStyle = "black";
  mainContext.fill();
  
  
    //draws white circle
  mainContext.beginPath();
  var radius2 = 20 + 100 * Math.abs(Math.cos(angle));
  mainContext.arc(225,225, radius2, 0, Math.PI*2,false);
  mainContext.closePath();
  
  //color circle
  mainContext.fillStyle = "white";
  mainContext.fill();
    
  
  //draws black circle
  mainContext.beginPath();
  var radius3 = 20 + 50 * Math.abs(Math.cos(angle));
  mainContext.arc(225,225, radius3, 0, Math.PI*2,false);
  mainContext.closePath();
  
  //color circle
  mainContext.fillStyle = "black";
  mainContext.fill();
  

  angle +=Math.PI/63;
  requestAnimationFrame(drawCircle);
}

drawCircle();

