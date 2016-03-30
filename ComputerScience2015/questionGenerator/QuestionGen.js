var starter = document.getElementById("MainButton");
document.getElementById("MainButton").addEventListener("click", makeQuestion, false);

function makeQuestion() {
    //To add more options, change the code in the i variable to be set to the number of options you wish. To start, we have 4 options, so we multiplied by 4.//
    var i = Math.floor(Math.random() * 7);
    var inquiryArray = ["When did", "Did ",
        "What year did ", "What did", "What race did", "How much ", "When was", "Which"];

    var nounArray = [" Hitler ", " Stalin",
        " Hitler", " Hitler", " Hitler ", " did 1 German Mark ", " Hitler ", " totalitarian rulers"];

    var verbArray = ["come to power?", " effectively govern his people?", " appoint the chancellor?", " burn to demonstrate the power of the Nazi's to the German people?", " use as scapegoats for Germany's problems?", "equal in 1923?", "arrested?", "fascist?"];


    var inquiryPhrase = inquiryArray[i];
    var nounPhrase = nounArray[i];

    var verbPhrase = verbArray[i];

    var actualQuestion = inquiryPhrase + nounPhrase + verbPhrase;
    document.getElementById("Question").innerHTML = actualQuestion;
}
