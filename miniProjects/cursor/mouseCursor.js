var canvas = doucument.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


    //mouse event
    var canvasPos = getPosition(canvas);
    var mouseX = 0;
    var mouseY = 0;
    
    canvas.addEventListener("mousemove", setMousePosition, false);
    
    function setMousePosition(e){
        mouseX = e.clientX - canvasPos.x;
        mouseY = e.clientY - canvasPos.y;
    }
    
    //gets mouse position
    function getPosition(el) {
        var xPosition = 0;
        var yPosition = 0;
        
  while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
        }
        
        return{
            x: xPosition,
            y: yPosition,
        };
    }

function update(){
    //circle
    ctx.beginPath();
    ctx.arc(100,100,50,0,2*Math.PI, true);
    ctx.fillStyle = "#FF6A6A";
    ctx.fill();
    
    requestAnimationFrame(update);
}
update();