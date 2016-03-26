//Function for when clicked an animation will occur. Also pause and play for the new song
    
var curSong = "mine";
function changeImage() {
    var image = document.getElementById('playPause');
    //If statement that changes the pictures on click
    if(image.src.match("http://image005.flaticon.com/1/svg/109/109195.svg")) {
        image.src = "http://image005.flaticon.com/1/svg/109/109197.svg";
    } else {
        image.src = "http://image005.flaticon.com/1/svg/109/109195.svg";
    }
    var audio = document.getElementById(curSong);
    //if statement that says, if next is clicked pause and play for the new song
    if(audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

//Array of all song inputs
//This is a list of objects with audio files attached
var homie = getElementById("homie");
var mine = getElementById("mine");
var ignition = getElementById("ignition");

//Plays the next song in the track library
//NEXT
function nextSong() {
    var play = false;
    var playlist = ["homie", "mine", "ignition"];
    for(i = 0; i <playlist.length; i++){
        if(!document.getElementById(playlist[i]).paused){
            changeImage();
            play = true;
        }
    }
    var nextSong = "";
    for(i = 0; i < playlist.length; i++){
        if(curSong == playlist[i]){
            if(i<playlist.length-1)nextSong = playlist[i+1];
            else nextSong = playlist[0];
        }
    }
//     alert(nextSong);
    curSong = nextSong;
    if(play)changeImage();
}

//Plays the PREVIOUS song in the track library
//PREVIOUS
function prevSong() {
    var play = false;
    var playlist = ["ignition", "mine", "homie"];
    for(i = 0; i <playlist.length; i++){
        if(!document.getElementById(playlist[i]).paused){
            changeImage();
            play = true;
        }
    }
    var nextSong = "";
    for(i = 0; i < playlist.length; i++){
        if(curSong == playlist[i]){
            if(i<playlist.length-1)nextSong = playlist[i+1];
            else nextSong = playlist[0];
        }
    }
//     alert(nextSong);
    curSong = nextSong;
    if(play)changeImage();
}


//Volume control
var homie = getElementById("homie");
function volume(){
    homie.volume = 0.5;
}