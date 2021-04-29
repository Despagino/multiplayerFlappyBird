const block = document.getElementById('block');
const hole = document.getElementById('hole');
const block1 = document.getElementById('block1');
const hole1 = document.getElementById('hole1');
let score = document.getElementById('score');
let player2 = document.getElementById('player2');
let player1 = document.getElementById('player1');
let reset = document.getElementById('reset');
let playagain = document.getElementById('playagain');
let jumping = false;
let jumping1 = false;
let counter = 0;
let counter1 = 0;
let gameOver;

// THE SPACE FOR THE CHARACTER TO GO THROUGH
// animationiteration is executing based on the the times my keyframes on css is ran, in my css the keyframes will run inifinite. 

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 400) + 150);
    hole.style.top = random + "px";
    counter++
});

hole1.addEventListener('animationiteration', () => {
    let random = -((Math.random() * 400) + 150);
    hole1.style.top = random + "px";
    counter1++
});


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
    player1.innerHTML = counter;
    if ((characterTop > 700) || ((blockLeft < 20) && (blockLeft > -50) && ((cTop < holeTop) || (cTop > holeTop + 130)))) {
        block.style.animationPlayState = 'paused';
        hole.style.animationPlayState = 'paused';
        character.style = ""
        // counter = 0;
        gameOver = true;
    }
}, 10)

var startGame1 = setInterval(() => {
    let characterTop1 =
        parseInt(window.getComputedStyle(character1).getPropertyValue("top"));
    if (jumping == 0) {
        character1.style.top = (characterTop1 + 3.4) + "px";
    }
    let blockLeft1 = parseInt(window.getComputedStyle(block1).getPropertyValue("left"));
    let holeTop1 = parseInt(window.getComputedStyle(hole1).getPropertyValue("top"));
    let cTop1 = -(720 - characterTop1);
    player2.innerHTML = counter1;
    if ((characterTop1 > 700) || ((blockLeft1 < 20) && (blockLeft1 > -50) && ((cTop1 < holeTop1) || (cTop1 > holeTop1 + 130)))) {
        block1.style.animationPlayState = 'paused';
        hole1.style.animationPlayState = 'paused';
        character1.style = ""
        // counter1 = 0;
        clearInterval(jump1)
        return;
    }
}, 10)




// reset.addEventListener('click', function () {
//     counter = 0;
//     counter1 = 0;
//     block.style.left = 400 + "px";
//     hole.style.top = -250 + 'px';
//     block1.style.left = 400 + "px";
//     hole1.style.top = -250 + 'px';
// })

// playagain.addEventListener('click', function () {
//     block.style.animationPlayState = 'running';
//     hole.style.animationPlayState = 'running';
//     block1.style.animationPlayState = 'running';
//     hole1.style.animationPlayState = 'running';
// })


// MAKING THE CHARACTER JUMP.


// function jump(e) {
//     jumping = true;
//     jumpCount = 0;
//     let jumpInterval = setInterval(() => {
//         let characterTop =
//             parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         if ((characterTop > 223)) {
//             character.style.top = (characterTop - 4) + "px";
//         }
//         if (jumpCount > 20) {
//             clearInterval(jumpInterval);
//             jumping = false;
//             jumpCount = 0;
//         }
//         jumpCount++;
//     }, 10);
// }


document.body.addEventListener('keydown', jump1);

function jump1(e) {
    if (e.keyCode === 16) {
        jumping1 = true;
        jumpCount1 = 0;
        let jumpInterval1 = setInterval(() => {
            let characterTop1 =
                parseInt(window.getComputedStyle(character1).getPropertyValue("top"));
            if ((characterTop1 > 223)) {
                character1.style.top = (characterTop1 - 4) + "px";
            }
            if (jumpCount1 > 20) {
                clearInterval(jumpInterval1);
                jumping1 = false;
                jumpCount1 = 0;
            }
            jumpCount1++;
        }, 10);
    }
}

