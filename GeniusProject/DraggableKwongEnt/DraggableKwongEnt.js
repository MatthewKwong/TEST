/*Intro Alert*/
alert("Click Kwong Enterprises Logo to return to the index");


function Home() {
  document.getElementById("display").innerHTML="<p> Welcome to Kwong Enterprises, here you can find some of the features of the company.  The <b>Home</b> tab brings you here, to the home.  The <b> CEO </b> tab gives you a little information about our founder.  Next the <b> Store </b> tab is where you can purchase some fantabulous items.  The <b> Clients </b> tab is where you can see our most loyal customers. In the <b> Jokes </b> you can hear the corniest jokes ever.  The <b> Music </b> tab is a selection of suggested musical singers/ groups. In the <b> Trailers </b> tab you can watch trailers from up coming movies.</p>";
}

function CEO() {
  document.getElementById("display").innerHTML="<p> Our founder Matthew Kwong has graduated from middle school! He totally knows what he's doing. Kwong Enterprises was founded in 2014 in Hong Kwong, China.  The company has offices located in all countries.  There are more than 0, but less than 2 people working here.</p>";
}

function Store() {
    var choice = prompt("1) Wonton                               ‚ $8.00\n2) Egg rolls                             ,$3.00 \n3) Potstickers                         ‚$6.00\n4) Kwong Xpericence Soda ‚ $1.50 \n_______________________________________\n Which one would you like to buy? \n (Please type in number)");
switch(choice) {
    case '1':
        alert("Okay, that will be $8.00.");
        break;
    case '2':
        alert("Your total will be $3.00.");
        break;
    case '3':
        alert("$6.00 will be your total.");
        break;
    case '4':
        alert("$1.50 will be your total.");
        break;
    default:
        alert("Thank you, come again");
}
}

function Clients() {
}
/*________________JOKES______________*/

function Jokes() {
   var jokes = ["What do  you call a shoe made out of a banana? A slipper! ", "What does a pirate say on his 80th birthday?  Ayeee matee", "Why can't your nose be 12 inches? Because then it would be a foot!", "How do you organize a space party?  You <b>planet</b>!", "Why did the scarecrow get a promotion?  Because he was outstanding in his field!", "What did the cannibal do after he dumped his ex girlfriend?  He wiped his butt.", "How do you tell the difference between a snowman and a snow-woman?  A snowman has <b>SNOW BALLS!</b>", "How do you make a squid laugh?  You give it 10 tickles", "Why do seaguls fly over the sea?  Because if they flew over the bay they'd be bagels.", "How do you make an egg-roll?   You push it!", "What do you call a cow with no legs?  Ground beef.", "What did the baby corn say to mamma corn?  Where's <b>POP</b>corn!", "Did you hear about the guy who had his whole left side cut off? Don't worry, he's <b>ALL-RIGHT</b> now.", "What did the duck say when he was paying for his food?  Put in on my bill!", "Why did the duck get arrested?  It was selling <b>QUACK!</b>", "Bert asked Ernie if he'd like any icecream. Ernie said,' Sure Burt'", "Why does Peter Pan always fly?  Because he <b>Never Lands</b> (That joke never gets old ;))", "What's a pirates favorite place to eat?  Arrrrrrrby's", "What's Peter Pan's favorite place to eat? Wendy's", "I tell chemestry jokes. Why haven't you seen any? Well, I tell them periodicly.", "Why didn't the skeleton go to the dance?  Because he had no body to the dance with.", "Why was the math book sad?  Because it had to many problems.", "What do mermaids wear to math class?  Algea-bras.", "Why was 6 afraid of 7? Because 7 was a registered 6-offender.", "What did one flag say to the other flag? Nothing, it just waved!", "Did you hear about the computer that crashed? It had a bad driver.", "What has 4 wheels and flies?  A garbage truck.", "What do you call immigrants to Sweden?  Artificial Swedeners.", "Why was the baby strawberry crying?  Because his mom and dad were in a jam.", "What lights up a soccer stadium?  A soccer match.", "Why couldn't the bicycle stand up by itself?  It was two tired.", " Where do boats go when they get sick? The dock", "What did one hat say to another?  You stay here, I'll go on a head"
];

    var randNum = Math.floor(Math.random() * jokes.length);
    document.getElementById("display").innerHTML = jokes[randNum];
}

function Music() {
  document.getElementById("display").innerHTML="<p class='musicintro'><u>Suggestions:</u></p><p><a href=http://passionpitmusic.com/music><img src='http://static.tumblr.com/k4ctywo/iB6m9y607/logo.png' height='50'></p><iframe src='https://embed.spotify.com/?uri=http://open.spotify.com/album/14JU5SskmcyckE5I8PY6lv' width='300' height='80' frameborder='0' allowtransparency='true'></iframe><br><iframe src='https://embed.spotify.com/?uri=spotify:album:6H51jH1SuzV6ca1VxW2Tmv'width='300'height='80'frameborder=0 allowtransparency=true></iframe><br><iframe src='https://embed.spotify.com/?uri=http://open.spotify.com/album/6aTke6PQenfJ1Weqp1TKRH'width='300'height='80'frameborder=0 allowtransparency=true></iframe><br><p><a href=http://samsmithworld.com/music/><img src='http://i.imgur.com/LHbWcyg.jpg' height='50'></p><iframe src='https://embed.spotify.com/?uri=http://open.spotify.com/album/48Q27KoyKp38caYPuy0KXD'width='300'height='80'unframeborder=0 allowtransparency=true></iframe><br><p><a href=http://www.edsheeran.com/home.htm?force=show><img src='http://i.imgur.com/YHBK0oL.jpg' height='30' width '20'></p><iframe src='https://embed.spotify.com/?uri=http://open.spotify.com/album/1xn54DMo2qIqBuMqHtUsFd'width='300'height='80'frameborder=0 allowtransparency=true></iframe>";
}


function Movies() {
    document.getElementById("display").innerHTML="<p>Avengers Age of Ultron</p><iframe width='569' height='340'src='//www.youtube.com/embed/MZoO8QVMxkk' frameborder='0'allowfullscreen></iframe><br> <p>Jurrasic World </p><iframe width='569' height='340' src='//www.youtube.com/embed/RFinNxS5KN4' frameborder='0' allowfullscreen></iframe>";
}


function Gallery() {
  document.getElementById("display").innerHTML="<h1>ART</h1><img src='http://i.imgur.com/920bLTR.png'style= height= '200' width= '200'><h1></h1><img src='https://i.imgur.com/GEfCyzq.png style= height= '200' width= '200'><h1></h1><img src='https://i.imgur.com/GA129Iz.jpg style= height='200' width= '200'><h1></h1><img src='http://i.imgur.com/MTFYx3J.png' style= height= '200' width= '200'>";}

$(document).ready(function(){
    $('.outline').draggable();
});

$(document).ready(function(){
    $('.addon').draggable();
});

$(document).ready(function(){
    $('.addon2').draggable();
});

$(document).ready(function(){
    $('.logo').draggable();
});
