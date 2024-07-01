let sound = new Audio("./assets/son/pop.mp3")
let soundIntro = new Audio("./assets/son/yoshisisland.mp3")
let dino = document.querySelector('#dino')
let inter = null;
let speed = 2000;
let partyEasy = document.querySelector('#easy');
let partyMedium = document.querySelector('#medium');
let partyHard = document.querySelector('#hard');
let scoreDisplay = document.querySelector('#scores');
let score = 0;
let replay = document.querySelector('#replay')
dino.style.display = 'none';
replay.style.display = 'none';
scoreDisplay.style.display = 'none';
const gameContainer = document.querySelector('main')
let timer = 30;
let time = document.querySelector('#time');
let timeInterval = null
let isMuted = false;


function startParty(difficulte) {

    switch (difficulte) {
        case 1:
            speed = 2000
            break;
        case 2:
            speed = 1000
            break;
        case 3:
            speed = 500
            break;
    }

    soundIntro.play()
    //sound.loop = true; //mettre le son en continue
    return startGame(speed)

}
function startGame() {
    score = 0;
    timer = 30;
    dino.style.display = 'block';
    time.style.display = 'block';
    partyEasy.style.display = 'none';
    partyMedium.style.display = 'none';
    partyHard.style.display = 'none';
    scoreDisplay.style.display = 'block';
    replay.style.display = 'none';

    mooveDino();
    dino.addEventListener('click', clickDino);
    inter = setInterval(function () {
        mooveDino()
    }, 1000)
    tim()
}

function mooveDino() {
    let dinoImg = document.querySelector("#dino");
    let randomY = random(0, gameContainer.clientHeight - dino.clientHeight)
    let randomX = random(0, gameContainer.clientWidth - dino.clientWidth)
    dinoImg.style.top = randomY + "px"
    dinoImg.style.left = randomX + "px"
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function clickDino() {
    score++;
    scoreDisplay.textContent = "Score" + score;
    mooveDino()
    clearInterval(inter)
    inter = setInterval(function () {
        mooveDino()
    }, 1000)
    sound.play()
    if (score >= 15) {
        scoreDisplay.innerHTML = score + " Points Bien joué ! "
        replay.style.display = 'block'
        dino.style.display = 'none'
    }
}
function tim() {
    timeInterval = setInterval(() => {
        timer--
        time.innerHTML = "Temps restant:" + timer + "s"
        if (timer <= 0) {
            clearInterval(timeInterval)
            scoreDisplay.innerHTML = score + " Points Bien joué ! "
            replay.style.display = 'block'
            dino.style.display = 'none'
        }
    }, 1000)
}

function replayGame() {
    score = 0
    dino.style.display = 'none';
    partyEasy.style.display = 'block';
    partyMedium.style.display = 'block';
    partyHard.style.display = 'block';
    scoreDisplay.style.display = 'none';
    replay.style.display = 'none'
    time.style.display = 'none';
}

document.getElementById('mute').addEventListener('click', () => { // bouton mute
    isMuted = !isMuted;
    soundIntro.muted = isMuted;
});
document.getElementById('volume-slider').addEventListener('input', (event) => { // bouton slider son
    const volume = event.target.value;
    soundIntro.volume = volume / 100;
});

const toggle = document.querySelector('#toggle');
let btnDark = document.querySelector('.test');
let srcVideolight = document.querySelector('.light');
let srcVideoDark = document.querySelector('.dark');

btnDark.addEventListener("click", () => {
    if (toggle.checked) {
    srcVideolight.classList.remove("hidden")
    srcVideoDark.classList.add("hidden")
 

}else{
    srcVideolight.classList.add("hidden")
    srcVideoDark.classList.remove("hidden")
    
}
});
