var maincharacter = {
    name: "solid snake",
    likes: "coins",
};
//Player spawn location
var playerX = -6;
var playerY = 7;
//This checks when the keys are pressed.
document.onkeydown = checkKey;
//what shows in the window.

function checkKey(e) {
    e = e || window.event;
    e.preventDefault();
    //up arrow
    //This allows the player to go up to maximum coordinates y, -7
    if(e.keyCode == '38' && playerY != 7) {
        document.getElementById("spot" + playerX + playerY).innerHTML = "";
        //Allows player to move up.
        if(checkMove(playerX, playerY + 1)) playerY++;
    }
    //right arrow
    //This allows the player to go right to maximum coordinates x, 7
    if(e.keyCode == '39' && playerX != 7) {
        document.getElementById("spot" + playerX + playerY).innerHTML = "";
        //Allows player to move right
        if(checkMove(playerX + 1, playerY)) playerX++;
    }
    //down arrow
    //This allows the player to go down to coordinates y, -7
    if(e.keyCode == '40' && playerY != -6) {
        //Gets the spot that the player is on in the table + their x and y coordinates on the graph.
        document.getElementById("spot" + playerX + playerY).innerHTML = "";
        //Allows player to move down.
        if(checkMove(playerX, playerY - 1)) playerY--;
    }
    //left arrow
    //This allows the player to go left to coordinates x, -7
    if(e.keyCode == '37' && playerX != -6) {
        document.getElementById("spot" + playerX + playerY).innerHTML = "";
        //Allows player to move left.
        if(checkMove(playerX - 1, playerY)) playerX--;
    }
    /*Finds the player's location and places the character into the game.*/
    document.getElementById("spot" + playerX + playerY).innerHTML = "<img style='width:78%' src = 'https://docs.google.com/drawings/d/1vmClKpAuw5BJVd_wPuJg8n3sBhv611vWAvDYzDQ3sLU/pub?w=347&h=387'/>";
}
/*This checks the next moves x and y*/

function checkMove(moveToX, moveToY) {
    /*Gets element by id spot and x, y coordinates. */
    /* This takes the color of the table block and if it's brown, it returns false. */
    if(document.getElementById("spot" + moveToX + moveToY).bgColor == "#5C4F22") {
        return false;
    } 
    else if(document.getElementById("spot" + moveToX + moveToY).bgColor == "red") {
                alert("Yay! You have completed the game! Refresh the browser to play again.");
    }
    
    else {
        /*If not a colored block, the user can move to their desired spot*/
        (document.getElementById("spot" + moveToX + moveToY).bgColor);
        return true;
    }
}