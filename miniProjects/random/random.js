
<html>
<head>
    <title>Kill</title>
</head>
<body>
   <style>
       html, body {
           overflow: hidden;
       }
        #characterImage, #enemyImage, #plantImage {
           display: none;
       }
       #enemyImage {
           width: 100px;
           height: 100px;
       }
    </style>
    <canvas id="gameScreen" width="1349x" height="600px">Your game won't work rip.</canvas>
<canvas id="myCanvas" width="1320" height="600"></canvas>
<script>
var gameCanvas = document.getElementById("gameScreen");
var ctx = gameCanvas.getContext("2d");
var gameImage = document.getElementById("gameImage");

function paintDrop(){
    this.x = Math.random()*gameCanvas.width;
    this.y = 0;
    this.update = function() {
        this.y++;
        ctx.beginPath();
        ctx.arc(this.x,this.y,2+5*Math.random(),0,2*Math.PI);
        ctx.fillStyle = "#A70000";
        ctx.fill();
    }
}

var paint = [];
    
document.addEventListener("keydown", function(e){
    if(e.keyCode === 32) {
        ctx.clearRect(0, 0, gameScreen.width, gameScreen.height);
    }
})

function gameLoop() {
    if(Math.random())paint.push(new paintDrop());
    for(i = 0; i < paint.length; i++){
        paint[i].update();
    }
    
    ctx.beginPath();
    ctx.font="200px sans-hef";
    ctx.fillStyle = "white"
    ctx.fillText("Max",gameScreen.width / 2 - 270, gameScreen.height/2);
    
    ctx.font="100px sans-href";
    ctx.fillStyle = "white";
    ctx.fillText("Your life is on the line", gameScreen.width / 2 - 425, (gameScreen.height / 3)*2+100);
    window.requestAnimationFrame(gameLoop);
}

gameLoop();
  
</script>    
</body>
</html>