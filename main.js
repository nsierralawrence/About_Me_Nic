'use strict';
        
var correctAnswers = 0;

 //greeting and ask user for name

    var userName = prompt("Howdy there friend! My name is Nic.  What\'s your name?");
    console.log(userName);
     while(!userName){
        userName = prompt("I already told you my name, so it\'s only fair that you tell me your name too.")
        }
     alert("Nice to meet you " + userName + "!" + " Since we\'re now friends, let\'s play a quick game so you can get to know me!");
    



//question about pets
function petsQuestion(){
    var pets = prompt("Does Nic have any pets?").toLowerCase();
        
    while(!pets){
        pets = prompt("This game is way more fun if you try and answer yes or no.")
        }

    if(pets === "yes" || pets === "y"){
        alert("Correct! Nic has one big fat kitty cat.");
        correctAnswers++;
        } else if(pets === "no" || pets === "n"){
            alert("Actually I do! One fat cat.");
        } else {
            alert("Just a simple yes or no answer works please.");
        }

    console.log(pets);
    }
petsQuestion();

//question about home state
function homeQuestion(){
    var home = prompt("Is Nic from Washington?").toLowerCase();

    while(!home){
        home = prompt("This game is way more fun if you try and answer yes or no.")
        }

    if(home === "yes" || home === "y"){
        alert("Nope! Nic is from the great state of Colorado.");
        } else if(home === "no" || home === "n"){
            alert("You guessed right! Nic is actually from Colorful Colorado.");
            correctAnswers++;
        } else {
            alert("Just a simple yes or no answer works please.");
        }
    console.log(home);
        }
        
homeQuestion();

//question about sports
function sportsQuestion(){
var sports = prompt("Is Nic a fan of sports?").toLowerCase();

    while(!sports){
        sports = prompt("This game is way more fun if you try and answer yes or no.")
        }

    if(sports === "yes" || sports === "y"){
        alert("Nah, Nic would rather read a book.");
        } else if(sports === "no" || sports ==="n"){
            alert("That's the right answer. Nic is not a sports fan.");
            correctAnswers++;
        } else {
            alert("Just a simple yes or no answer works please.");
        }
        
     console.log(sports);
        }

sportsQuestion();

//question about coffee
 function coffeeQuestion(){
    var coffee = prompt("Does Nic love coffee?").toLowerCase();

    while(!coffee){
        coffee = prompt("This game is way more fun if you try and answer yes or no.")
        }

    if(coffee === "yes" || coffee === "y"){
        alert("Yup! Forever and always!");
        correctAnswers++;
        } else if(coffee === "no" || coffee ==="n"){
            alert("No way! Nic would die without coffee!");
        } else {
            alert("Just a simple yes or no answer works please.");
        }

    console.log(coffee);
        }

coffeeQuestion();

//met someone famous question
function famousQuestion(){
    var famous = prompt("Has Nic met anyone famous?").toLowerCase();

    while(!famous){
        famous = alert("This game is way more fun if you try and answer yes or no.")
        }

    if(famous === "yes" || famous === "y"){
        alert("You bet! I once served a slice of chocolate cake to Ben Gibbard of Death Cab for Cutie.");
        correctAnswers++;
        } else if(famous === "no" || famous ==="n"){
            alert("Ah, but Nic has! Guess who!?");
        } else {
            alert("Just a simple yes or no answer works please.");
        }

    console.log(famous);
        }

famousQuestion();

//ask user to guess how many coffees I've had this week and give user four chances to guess
function numCoffeeQuestion(){
    var coffeeCounter = 4;
    var numCoffee = 13;
    var coffeeGuess;

    do{
        coffeeGuess = parseInt(prompt("Can you correctly guess how many coffees Nic has had so far this week?"));
        
        if(numCoffee === coffeeGuess){
            alert("You guessed right! Nic clearly loves her coffee.");
            correctAnswers++;
             break;
            } else if(coffeeGuess < numCoffee){
                alert("Too low. Try again.");
            } else{
                alert("A bit too high. Guess again.");
            }
            coffeeCounter--;
        } while(numCoffee !== coffeeGuess && coffeeCounter > 0);

        if(coffeeCounter === 0){
            alert("Nice tries.  Nic has had 13 coffees this week...so far.");
        }

        console.log(coffeeGuess);
        }
        
numCoffeeQuestion();

//ask user to guess which states I've traveled to and give user six chances to guess
function statesQuestion(){
    var stateCounter = 6;
    var states = ['Washington', 'Oregon', 'California', 'Arizona', 'Nevada', 'Idaho', 'Utah', 'Wyoming', 'New Mexico', 'Colorado', 'Kansas', 'Missouri', 'Oklahoma', 'Iowa', 'New York', 'Texas'];
    var answeredRight = false;

    do{
        var stateAnswer = prompt("Can you guess which states Nic has travelled to?");
            
        for(var i = 0; i < states.length; i++){
            if(states[i] === stateAnswer){
                answeredRight = true;
                }
            }

        if(answeredRight){
            alert("Yuppers! Been there. Done that.");
            correctAnswers++;
            } else{
                alert("Nic has been to many places, but she hasn\'t been there yet. Try again.");
            }
        stateCounter--;
        } while(stateCounter >  0  && !answeredRight);

        if(!answeredRight || answeredRight){
            alert("Nice tries. Nic has travelled to and through: Washington, Oregon, California, Arizona, Nevada, New Mexico, Idaho, Utah, Wyoming, Colorado, Kansas, Missouri, Oklahoma, Iowa, New York and Texas.");
            }
            console.log(stateAnswer);
        }


statesQuestion();

// console.log(correctAnswers);

//tell user how they did in answering the questionnaire.
            
alert('You got ' + correctAnswers + ' out of 7 questions correct ' + userName + '. Don\'t worry though! You\'ll have more opportunities to learn more about Nic!');