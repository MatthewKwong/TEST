var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


var char = {
    xPos:0,
    yPos:450,
    width:50,
    height:50,
    goLeft: false,
    goUp: false,
    goDown: false,
    goRight: false,
    //draw
    draw: function(){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.xPos,this.yPos,this.width,this.height);    
    },
}

var char2 = {
    xPos:450,
    yPos:450,
    width:50
    height:50,
    //draw
    draw: function(){
        ctx.fillStyle = "red";
        ctx.fillRect(this.xPos,this.yPos,this.width,this.height);
    
    },
}




function loop(){
    char.draw();
    char2.draw();
    
    window.requestAnimationFrame(loop);
}

loop();