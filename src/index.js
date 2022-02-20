import styles from "./style.css";
import Star from './star.svg';

// ----------------------------------------------------- Layout ---------------------------------------------------

function createfonImages() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.append(wrapper);

    let fonImage = document.createElement('img');
    fonImage.src = 'https://p4.wallpaperbetter.com/wallpaper/412/1018/503/blue-the-world-black-background-world-map-mainland-hd-wallpaper-preview.jpg';
    fonImage.alt = 'fonImage';
    fonImage.classList.add('fon__image');
    wrapper.append(fonImage);
}
createfonImages()
let wrapper = document.querySelector('.wrapper');

function createContainerBox() {
    let containerBox = document.createElement('div');
    containerBox.classList.add('container__box');
    wrapper.append(containerBox);
}
createContainerBox();
let containerBox = document.querySelector('.container__box');

function createContainer() {
    let container = document.createElement('div');
    container.classList.add('container');
    containerBox.append(container);
}
createContainer();
let container = document.querySelector('.container');

function createFlagsBox() {
    let flagBox = document.createElement('div');
    flagBox.classList.add('flag__box');
    container.append(flagBox);
}
createFlagsBox();
let flagBox = document.querySelector('.flag__box');

function createFlag() {
    let flag = document.createElement('img');
    flag.classList.add('flag');
    flagBox.append(flag);
}
createFlag();
let flag = document.querySelector('.flag');

function createBtnsContainer() {
    let btnsContainer = document.createElement('div');
    btnsContainer.classList.add('btns__container');
    containerBox.append(btnsContainer);
}
createBtnsContainer();
let btnsContainer = document.querySelector('.btns__container');

function createBtn(id) {
    let btn = document.createElement('a');
    btn.classList.add('btn');
    btn.id = id;
    
    btnsContainer.append(btn);
}
createBtn('btn1');
createBtn('btn2');
createBtn('btn3');
createBtn('btn4');

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');
let btns = document.querySelectorAll('.btn');

function createLandInfoBox() {
    let landInfoBox = document.createElement('div');
    landInfoBox.classList.add('land__info__box');
    btnsContainer.append(landInfoBox);
}
createLandInfoBox();
let landInfoBox = document.querySelector('.land__info__box');

function createLandInfoBoxContainer(id) {
    let landInfoBoxContainer = document.createElement('span');
    landInfoBoxContainer.classList.add('land_info_box_container');
    landInfoBoxContainer.id = id;
    landInfoBox.append(landInfoBoxContainer);
}
createLandInfoBoxContainer('landInfoBoxContainerName');
createLandInfoBoxContainer('landInfoBoxContainerCountri');
createLandInfoBoxContainer('landInfoBoxContainerPopulation');

function createScoreContainer() {
    let scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score__container');
    wrapper.append(scoreContainer);
}
createScoreContainer();
let scoreContainer = document.querySelector('.score__container'); 

function createStarImg() {
    let star = new Image();
    star.classList.add('star');
    star.alt = 'star';
    star.src = Star;
    scoreContainer.append(star);
}
createStarImg();

function createPoints() {
    let playerPoints = document.createElement('span');
    playerPoints.classList.add('player__Points');
    playerPoints.id = 'playerPoints';
    scoreContainer.append(playerPoints);

    let totalPoints = document.createElement('span');
    totalPoints.classList.add('player__Points');
    totalPoints.innerText = '/ 20'
    scoreContainer.append(totalPoints);
}
createPoints();
let playerPoints = document.querySelector('#playerPoints');
playerPoints.innerText = 10;

function createTimerContainer() {
    let timerContainer = document.createElement('div');
    timerContainer.classList.add('timer__container');
    wrapper.append(timerContainer);

    let timerSlider = document.createElement('div');
    timerSlider.classList.add('timer__slider');
    timerContainer.append(timerSlider);
}
createTimerContainer();
let timer = document.querySelector('.timer__slider');

function createMessage() {
    let message = document.createElement('div');
    message.classList.add('message');
    wrapper.append(message);
}
createMessage();
let message = document.querySelector('.message');

//------------------------------------------------------ Game -------------------------------------------------------------
let landResult = '';
let randomLand1 = '';
let randomLand2 = '';
let randomLand3 = '';

game();

function game() {

    hiddenInfoBox();
    wrapper.removeEventListener('click', startNewGame);
    
    let fetchInfo = fetch('https://api.sampleapis.com/countries/countries')
    .then(response => response.json())
    .then(landObj => {
        
        let numLandResult = '';
        let numLandRandom1 = '';
        let numLandRandom2 = '';
        let numLandRandom3 = '';

        searchLands();

        function searchLands() {
            numLandResult = getRandomIntInclusive(1, landObj.length -1);
            numLandRandom1 = getRandomIntInclusive(1, landObj.length -1);
            numLandRandom2 = getRandomIntInclusive(1, landObj.length -1);
            numLandRandom3 = getRandomIntInclusive(1, landObj.length -1);

            if (numLandResult === numLandRandom1 || numLandResult === numLandRandom2 || numLandResult === numLandRandom3) {
                searchLands();
            }
            if (numLandRandom1 === numLandRandom2 || numLandRandom1 === numLandRandom3) {
                searchLands();
            }
            if (numLandRandom2 === numLandRandom3) {
                searchLands();
            }
        }

        landResult = landObj[numLandResult];
        randomLand1 = landObj[numLandRandom1];
        randomLand2 = landObj[numLandRandom2];
        randomLand3 = landObj[numLandRandom3];

        console.log(landResult.name);
        console.log(landResult);
            
        flag.src = landResult.media.flag;
        
        checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);
    });
}

function checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3) {
    flag.onload = ()=> {
    setBtnsValues();
    startTimer();

    btns.forEach(elem => {
        elem.addEventListener('click', checkAnswer);
    });
    }

    flag.onerror = ()=> {
        let num = getRandomIntInclusive(1, landObj.length -1);
        
        if (num === numLandRandom1 || num === numLandRandom2 || num === numLandRandom3) {
            checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);
        }
        if (numLandRandom1 === numLandRandom2 || numLandRandom1 === numLandRandom3) {
            checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);
        }
        if (numLandRandom2 === numLandRandom3) {
            checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);
        }

        landResult = landObj[num];
        flag.src = landResult.media.flag;
        checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);
    }
}

function setBtnsValues() {
    let arr = [btn1, btn2, btn3, btn4];
    let random = getRandomIntInclusive(0, 3);
    arr[random].innerHTML = landResult.name;
    arr.splice(random, 1);
    arr[0].innerHTML = randomLand1.name;
    arr[1].innerHTML = randomLand2.name;
    arr[2].innerHTML = randomLand3.name;
}

function checkAnswer() {
    clearInterval(timerGo);
    timer.style.width;

    if (this.innerHTML === landResult.name) {
        morePoints();

        btns.forEach(elem => {
            elem.removeEventListener('click', checkAnswer);
        });
        
        this.style.backgroundColor = '#02705C';

        setTimeout(()=> {
            showMessage('#02705C', 'Right', 'flex');

            setTimeout(()=> {
                message.style.display = 'none';
                showLandsInfo();
            },1000);
        },500);
    } else {
        lessPoinnts();

        btns.forEach(elem => {
            elem.removeEventListener('click', checkAnswer);
        });

        this.style.backgroundColor = '#A30312';
        
        btns.forEach(elem => {
            if (elem.innerHTML === landResult.name) {
                elem.style.backgroundColor = '#02705C';
            }
        });

        setTimeout(()=> {
            showMessage('#A30312', 'Wrong', 'flex');

            setTimeout(()=> {
                message.style.display = 'none';
                showLandsInfo();
            },1000);
        },500);
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function showLandsInfo() {
    showInfoBox();
    btns.forEach(elem => {
        elem.style.display = 'none';
    });
    
    let infoName = document.querySelector('#landInfoBoxContainerName');
    let infoCountry = document.querySelector('#landInfoBoxContainerCountri');
    let infoPopulation = document.querySelector('#landInfoBoxContainerPopulation');

    infoName.innerHTML = `Land: ${landResult.name}`;

    if (landResult.capital) {
        infoCountry.innerHTML = `Capital: ${landResult.capital}`;
    }
    if (landResult.population) {
        let num = editNumPeople();
        infoPopulation.innerHTML = `Population: ${num} people`;
    }
    showResultMessage();
    }

function editNumPeople() {
    let num = landResult.population;
    num += "";
    num = num.split('');
    if (num.length > 3) {
        num.splice(-3, 0, " ");
    }
    if (num.length > 7) {
        num.splice(-7, 0, " ");
    }
    if (num.length > 10) {
        num.splice(-11, 0, " ");
    }
    return num.join('');
}

function showInfoBox() {
    btnsContainer.style.backgroundColor = '#BDD4F2';
    btnsContainer.style.borderRadius = '20px';
    btnsContainer.style.border = '10px solid white';
    btnsContainer.style.boxSizing = "border-box";
    landInfoBox.style.display = 'flex';

    btns.forEach(elem => {
        elem.innerHTML = '';
    })
}

function hiddenInfoBox() {
    btnsContainer.style.backgroundColor = '#11ffee00';
    btnsContainer.style.borderRadius = '20px';
    btnsContainer.style.border = 'none';
    btnsContainer.style.boxSizing = "content-box";
    landInfoBox.style.display = 'none';

    btns.forEach(elem => {
        elem.style.display = 'flex';
        elem.style.backgroundColor = '#4F5C88';
    });
}

function startNewGame() {
    cleanResult();
    hiddenInfoBox();
    game();
}

function morePoints() {
    let num = +playerPoints.innerHTML + 1;
    playerPoints.innerHTML = num + '';
}

function lessPoinnts() {
    let num = +playerPoints.innerHTML - 1;
    playerPoints.innerHTML = num + '';
}

function showResultMessage() {
    let num = +playerPoints.innerHTML;
    clearInterval(timerGo);
    if (num === 20) {
        showMessage('#02705C', 'You Win!', 'flex');
    }
    if (num === 0) {
        showMessage('#A30312', 'You Lose!', 'flex');
    }
    
    wrapper.addEventListener('click', startNewGame);
}

function showMessage(color, text, view) {
    message.style.backgroundColor = color;
    message.innerHTML = text;
    message.style.display = view;
}

function cleanResult() {
    if (message.innerHTML === 'You Lose!' || message.innerHTML === 'You Win!') {
        message.innerHTML = "";
        message.style.display = 'none';
        playerPoints.innerHTML = '10';
    }
}
// ---------------------------------------------- Timer ----------------------------------------------

function startTimer() {
    timer.style.width = '100%';
    reductionTimer();
}

let timerGo;

function reductionTimer() {
    let num = parseInt (timer.style.width);
    let percentNum = num /200;
    timerGo = setInterval(start, 50);

    function start() {
        
        num = num - percentNum;
        timer.style.width = `${num}%`;
        
        if (num <= 0.15) {
            timer.style.width = `0%`;
            clearInterval(timerGo);
            showMessage('#A30312', 'You Lose!', 'flex');

            btns.forEach(elem => {
                elem.removeEventListener('click', checkAnswer);
            });
            wrapper.addEventListener('click', startNewGame);

        }
    }
}
