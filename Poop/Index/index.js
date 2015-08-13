
/*Colored Background*/
  addEventListener("keydown", function(event) {
    if (event.keyCode == 13)
      document.body.style.backgroundImage = "url('http://static3.gamespot.com/uploads/original/1365/13658182/2559799-bak_sshot075.jpg')";
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 13)
      document.body.style.backgroundImage  = "";
  });
 
/* Text*/
      addEventListener("keydown", function(event) {
    if (event.keyCode == 13)
        for(i=0;i<document.getElementsByClassName('week').length;i++){
            document.getElementsByClassName('week')[i].style.color = "white";
        }
  });
  addEventListener("keyup", function(event) {
    if (event.keyCode == 13)
        for(i=0;i<document.getElementsByClassName('week').length;i++)
            document.getElementsByClassName('week')[i].style.color = "black";
  });


