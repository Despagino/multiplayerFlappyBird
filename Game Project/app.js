const block = document.getElementById('block');
const hole = document.getElementById('hole');
const block1 = document.getElementById('block1');
const hole1 = document.getElementById('hole1');
let player2 = document.getElementById('player2');
let player1 = document.getElementById('player1');
var character = document.getElementById('character')
var character1 = document.getElementById('character1')
let jumping = 0;
let jumping1 = 0;
let counter = 0;
let counter1 = 0;



// THE SPACE FOR THE CHARACTER TO GO THROUGH

let flappyhit = new Audio('/Users/ginotasis/Desktop/Software Engineering/Game Project/multiplayerFlappyBird/trash.mp3');
var flappypoint = new Audio('/Users/ginotasis/Desktop/Software Engineering/Game Project/multiplayerFlappyBird/flappypoint.mp3')

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 400) + 150);
    hole.style.top = random + "px";
    counter++;
    flappypoint.play()
});

hole1.addEventListener('animationiteration', () => { // for everytime the keyframe is executed, do this:
    let random = -((Math.random() * 400) + 150); // everytime the keyframe is executed, a random white space will be generated for the player to go through
    hole1.style.top = random + "px";
    counter1++ // counts how many times the keyframe is executed
    flappypoint.play()
});


// MAKING THE CHARACTER HAVE IT'S GRAVITY//
//LOGIC GOING THROUGH EACH BAR

var startGame = setInterval(() => {
    let characterTop =
        parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (jumping == 0) {
        character.style.top = (characterTop + 3.4) + "px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(720 - characterTop);
    player1.innerHTML = parseInt(counter);
    if ((characterTop > 700) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        block.style.animationPlayState = 'paused';
        hole.style.animationPlayState = 'paused';
        flappyhit.play()
        clearInterval(startGame);
        if (counter > counter1) {
            player1.style.color = 'green';
            player2.style.color = 'red'
        }
    }
}, 10)


var startGame1 = setInterval(() => {
    let characterTop1 =
        parseInt(window.getComputedStyle(character1).getPropertyValue("top")); // numeric value of character1.style.top and made it variable of characterTop1
    if (jumping1 == 0) { // if character is not jumping. True or false
        character1.style.top = (characterTop1 + 3.4) + "px"; // adds the gravity effect, makes the character go down. Adds 3.4 px
    }
    let blockLeft1 = parseInt(window.getComputedStyle(block1).getPropertyValue("left")); // numeric value of block1.style.left
    let holeTop1 = parseInt(window.getComputedStyle(hole1).getPropertyValue("top")); // numeric value of block1.style.left
    let cTop1 = -(720 - characterTop1); // making our characterTop value positive so we can commpare with the above values
    player2.innerHTML = parseInt(counter1); // adds score 
    if ((characterTop1 > 700) || ((blockLeft1 < 20) && (blockLeft1 > -50) && ((cTop1 < holeTop1) || (cTop1 > holeTop1 + 130)))) { // if you get an error
        block1.style.animationPlayState = 'paused'; // pauses keyframe
        hole1.style.animationPlayState = 'paused'; // pauses keyframe
        flappyhit.play()
        clearInterval(startGame1); // stops the gravity
        if (counter1 > counter) {
            player2.style.color = 'green';
            player1.style.color = 'red'
        }
    }
}, 10)

// if the character hits the bottom OR if the block hits the character (our character had 20 px) AND if the block is touching the character in any shape or form even when you're already inside of the hole AND if my character is





// MAKING THE CHARACTER JUMP
document.body.addEventListener('keydown', jump);

function jump(e) {
    if (e.keyCode === 70) {
        jumping = 1;
        jumpCount = 0;

        let jumpInterval = setInterval(() => {
            let characterTop =
                parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            if ((characterTop > 223)) {
                character.style.top = (characterTop - 4) + "px";
            }
            if (jumpCount == 20) {
                clearInterval(jumpInterval);
                jumping = 0;
                jumpCount = 0;
            }
            jumpCount++;
        }, 10);
    }
}

document.body.addEventListener('keydown', jump1);

function jump1(e) {
    if (e.keyCode === 74) { // j key to jump
        jumping1 = 1; // signifies if "character" is jumping. True or false
        jumpCount1 = 0; // counts how many times the interval is ran


        let jumpInterval1 = setInterval(() => { //this will run every 10 milliseconds when the function is execeuted 
            let characterTop1 =
                parseInt(window.getComputedStyle(character1).getPropertyValue("top")); // returns the numeric value pf the top style of character 
            if ((characterTop1 > 223)) {
                character1.style.top = (characterTop1 - 4) + "px"; // for everytime that my character is not reaching the top of the box, I will make it jump 4 px
            }
            if (jumpCount1 == 20) { // once we've hit 20 inervals we will need to stop the interval so that the character will continue back down agains
                clearInterval(jumpInterval1);
                jumping1 = 0;
                jumpCount1 = 0;
            }
            jumpCount1++;
        }, 10);
    }
}


// hole.animate([
//     { left: 400 + "px" },
//     { left: -50 + "px" }
// ], {
//     iterations: Infinity,
//     duration: 1500,
//     easing: 'linear',
//     direction: 'normal',
// }
// )
// block.animate([
//     { left: 400 + "px" },
//     { left: -50 + "px" }
// ], {
//     iterations: Infinity,
//     duration: 1500,
//     easing: 'linear',
//     direction: 'normal',
// })
