const min = 1;
const max = 10;
const answer = Math.floor(Math.random() * (max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Pick a number between ${min}-${max}`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Enter a valid number");
    }
    else if(guess < min || guess > max){
        window.alert("Enter a valid number");
    }
    else{
        attempts++;
        if (guess < answer){
            window.alert("TOO LOW")
        }
        else if (guess > answer){
            window.alert("TOO HIGH");
        }

    }
    if (guess == answer){
        window.alert(`You win it took you ${attempts} attempts`);
        running = false; 
    }
    
}