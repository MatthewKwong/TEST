    var track1 = document.getElementById("song1");
    var track2 = document.getElementById("song2");
    var track3 = document.getElementById("song3");
    var track4 = document.getElementById("song4");
    var track5 = document.getElementById("song5");
    var track6 = document.getElementById("song6");
        
    var allMusicTracks = [track1, track2 , track3, track4, track5, track6];
    
//         create a function that when onclick pauses all elements except for that one.  
    function oneSongOnly(){
        for(i = 0; i < allMusicTracks.length; i++){
            allMusicTracks[i].pause() 
            allMusicTracks.currentTime = 0()
            
        }
    }




function setCurTime() { 
    var GameTrailer = document.getElementById("GameTrailer");
    GameTrailer.currentTime = 5;
}
setCurTime();