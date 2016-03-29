var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

context.beginPath();
context.rect(75, 100, 250, 150);

var gradient = context.createRadialGradient(150, 175, 0, 150, 175, 100);
gradient.addColorStop(0.1, "blue");
gradient.addColorStop(.75,"#407EC4");
gradient.addColorStop(1,"#8FB8E6");

// context.lineWidth = 5;
// context.strokeStyle = "#333333";
// context.fillStyle ="#ffcc00";

context.fillStyle = gradient;

context.fill();
// context.stroke();



