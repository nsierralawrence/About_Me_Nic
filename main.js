'use strict';
        
        //greeting
        var userName = prompt("Howdy there friend! My name is Nic.  What\'s your name?");
        console.log("What\'s your name" + userName);
        alert("Nice to meet you " + userName + "!" + " Since we\'re now friends, let\'s play a quick game so you can get to know me!");
       
       //question about pets
        var pets = prompt("Does Nic have any pets?").toLowerCase();
        
        if(pets === "yes" || pets === "y"){
            alert("Correct! Nic has one big fat kitty cat.");
        } else if(pets === "no" || pets === "n"){
            alert("Actually I do! One fat cat.");
        } else {
            alert("Just a simple yes or no answer works please.");
        };

        //question about home state
        var home = prompt("Is Nic from Washington?").toLowerCase();

        if(home === "yes" || home === "y"){
            alert("Nope! Nic is from the great state of Colorado.");
        } else if(home === "no" || home === "n"){
            alert("You guessed right! Nic is actually from Colorful Colorado.");
        } else {
            alert("Just a simple yes or no answer works please.");
        };
        
        //question about sports
        var sports = prompt("Is Nic a fan of sports?").toLowerCase();

        if(sports === "yes" || sports === "y"){
            alert("Nah, I'd rather read a book.");
        } else if(sports === "no" || sports ==="n"){
            alert("That's the right answer. Nic is not a sports fan.");
        } else {
            alert("Just a simple yes or no answer works please.");
        };
        
        //question about coffee
        var coffee = prompt("Does Nic love coffee?").toLowerCase();

        if(coffee === "yes" || coffee === "y"){
            alert("Yup! Forever and always!");
        } else if(coffee === "no" || coffee ==="n"){
            alert("No way! Nic would die without coffee!");
        } else {
            alert("Just a simple yes or no answer works please.");
        };
        
        //someone famous question
        var famous = prompt("Has Nic met anyone famous?").toLowerCase();

        if(famous === "yes" || famous === "y"){
            alert("You bet! I once served a slice of chocolate cake to Ben Gibbard of Death Cab for Cutie.");
        } else if(famous === "no" || famous ==="n"){
            alert("Ah, but I have! Guess who!?");
        } else {
            alert("Just a simple yes or no answer works please.");
        };
        
        alert("Well thanks a bunch for playing this quick guessing game! I guess that makes us best friends now, huh?");
        