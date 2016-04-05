var sec= document.getElementById("seconds");
var min= document.getElementById("minutes");
var hour= document.getElementById("hours");
/* These variables take the div id's from the html and incert them into the js.*/

var time;
var angle;
var seconds;
var minutes;
var hours;
/*These variables represent time, the angle of the clock, seconds,minutes, and hours of the day.*/

function update(){
    var date = new Date();
    seconds = date.getSeconds();
    minutes = date.getMinutes();
    hours = date.getHours();
/*This rotates the divs used to create the dials of the clock, according to time in seconds, minutes, or hours.*/

    time=(hours%12)*60*60+(minutes%60)*60+seconds;
/*(above) This time function gets the remainder of the hour multiplied by the seconds and minutes.  It adds the remainder of minutes times 60 seconds to convert it into seconds.  This allows the angle of dials to show 12- hours in am and pm, 60- seconds, 60 minutes, 360- area of a circle.*/

     angle =time/12/60/60*360;
/*The angle of the clock is shown in the movement of the dial. By dividing the hours in a day by seconds and minutes it creates a percentage. When this is multiplied by 360 it creates a percentage around 360 degrees that creates a degree in the angle of the whole clock. This can be done due to angle equaling the time. */

    hour.style.transform = "rotate("+angle+"deg)";
/*With the hour transform it rotates the angle (percentage created by dividing all numbers) from 360.*/

    time=(minutes%60)*60+seconds;
    angle =time/60/60*360;
    min.style.transform = "rotate("+angle+"deg)";
/*This same thing is repeated for minutes and seconds.*/

    time=seconds%60;
    angle =time/60*360;
    sec.style.transform = "rotate("+angle+"deg)";
/*This same thing is repeated for minutes and seconds.*/

    window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);
/*The request animation frame is used to have each dial move.  This can be shown from  */

alert("Please restore down the browser window if you're on a larger screen");