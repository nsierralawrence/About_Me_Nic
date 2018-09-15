'use strict';
            var correctAnswers = 0
        //greeting
        var userName = prompt("Howdy there friend! My name is Nic.  What\'s your name?");
        console.log(userName);
        while(!userName){
            userName = prompt("I already told you my name, so it\'s only fair that you tell me your name too.")
        }
        alert("Nice to meet you " + userName + "!" + " Since we\'re now friends, let\'s play a quick game so you can get to know me!");
       
       //question about pets
        var pets = prompt("Does Nic have any pets?").toLowerCase();
        
        while(!pets){
            pets = prompt("This game is way more fun if you try and answer yes or no.")
        }

        if(pets === "yes" || pets === "y"){
            alert("Correct! Nic has one big fat kitty cat.");
        } else if(pets === "no" || pets === "n"){
            alert("Actually I do! One fat cat.");
        } else {
            alert("Just a simple yes or no answer works please.");
        }

        console.log(pets);

        //question about home state
        var home = prompt("Is Nic from Washington?").toLowerCase();

        while(!home){
            home = prompt("This game is way more fun if you try and answer yes or no.")
        }

        if(home === "yes" || home === "y"){
            alert("Nope! Nic is from the great state of Colorado.");
        } else if(home === "no" || home === "n"){
            alert("You guessed right! Nic is actually from Colorful Colorado.");
        } else {
            alert("Just a simple yes or no answer works please.");
        }
        console.log(home);
    
        //question about sports
        var sports = prompt("Is Nic a fan of sports?").toLowerCase();

        while(!sports){
            sports = prompt("This game is way more fun if you try and answer yes or no.")
        }

        if(sports === "yes" || sports === "y"){
            alert("Nah, I'd rather read a book.");
        } else if(sports === "no" || sports ==="n"){
            alert("That's the right answer. Nic is not a sports fan.");
        } else {
            alert("Just a simple yes or no answer works please.");
        }
        
        console.log(sports);

        //question about coffee
        var coffee = prompt("Does Nic love coffee?").toLowerCase();

        while(!coffee){
            coffee = prompt("This game is way more fun if you try and answer yes or no.")
        }

        if(coffee === "yes" || coffee === "y"){
            alert("Yup! Forever and always!");
        } else if(coffee === "no" || coffee ==="n"){
            alert("No way! Nic would die without coffee!");
        } else {
            alert("Just a simple yes or no answer works please.");
        }

        console.log(coffee);
        
        //someone famous question
        var famous = prompt("Has Nic met anyone famous?").toLowerCase();

        while(!famous){
            famous = alert("This game is way more fun if you try and answer yes or no.")
        }

        if(famous === "yes" || famous === "y"){
            alert("You bet! I once served a slice of chocolate cake to Ben Gibbard of Death Cab for Cutie.");
        } else if(famous === "no" || famous ==="n"){
            alert("Ah, but I have! Guess who!?");
        } else {
            alert("Just a simple yes or no answer works please.");
        }

        console.log(famous);

        //run function till they have guessed four times
        var coffeeCounter = 4;
        var numCoffee = 13;
        var coffeeGuess;

        do{
            coffeeGuess = parseInt(prompt("Can you correctly guess how many coffees I\'ve had so far this week?"));
            if(numCoffee === coffeeGuess){
                alert("You guessed right! I clearly love coffee.")
                break;
            } else if(coffeeGuess < numCoffee){
                alert("Too low. Try again.");
            } else{
                alert("A bit too high. Guess again.");
            }
            coffeeCounter--;
        } while(numCoffee !== coffeeGuess && coffeeCounter > 0);

        if(coffeeCounter === 0){
            alert("Nice tries.  I\'ve had 13 coffees this week...so far.");
        }

        console.log(numCoffee === coffeeGuess);

        //question about states I've traveled to
        var stateCounter = 6;
        var states = ['Washington', 'Oregon', 'California', 'Arizona', 'Nevada', 'Idaho', 'Utah', 'Wyoming', 'New Mexico', 'Colorado', 'Kansas', 'Missouri', 'Oklahoma', 'Iowa', 'New York', 'Texas'];
        var answeredRight = false;

        do{
            var stateAnswer = prompt("Can you guess which states I\'ve travelled to?");
            
            for(var i = 0; i < states.length; i++){
                if(states[i] === stateAnswer){
                    answeredRight = true;
                }
            }

            if(answeredRight){
                // alert(states[i]);
                alert("Yuppers! Been there. Done that.");
            } else{
                alert("I\'ve been many places, but I haven\'t been there yet. Try again.");
            }
            stateCounter--;
            } while(stateCounter >  0  && !answeredRight);

            if(!answeredRight || answeredRight){
                alert("Nice tries. I\'ve travelled to and through: Washington, Oregon, California, Arizona, Nevada, New Mexico, Idaho, Utah, Wyoming, Colorado, Kansas, Missouri, Oklahoma, Iowa, New York and Texas.");
            }
                