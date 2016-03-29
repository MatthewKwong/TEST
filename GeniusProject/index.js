
/*Colored Background*/
  addEventListener("keydown", function(event) {
    if (event.keyCode == 13)
      document.body.style.backgroundColor = "black";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 13)
      document.body.style.backgroundColor  = "";
  });
 
/* Text*/
      addEventListener("keydown", function(event) {
    if (event.keyCode == 13)
        for(i=0;i<document.getElementsByClassName('week' ).length;i++){
            document.getElementsByClassName('week')[i].style.color = "white";
        }
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 13)
        for(i=0;i<document.getElementsByClassName('week').length;i++)
            document.getElementsByClassName('week')[i].style.color = "black";
  });


