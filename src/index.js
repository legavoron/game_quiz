import styles from "./style.css";
import Star from './star.svg';


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
    flag.alt = 'flag';
    flagBox.append(flag);
}
createFlag();
let flag = document.querySelector('.flag');

flag.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Webpack.svg/1200px-Webpack.svg.png';

function createBtnsContainer() {
    let btnsContainer = document.createElement('div');
    btnsContainer.classList.add('btns__container');
    containerBox.append(btnsContainer);
}
createBtnsContainer();
let btnsContainer = document.querySelector('.btns__container');

function createBtn(id, value) {
    let btn = document.createElement('a');
    btn.classList.add('btn');
    btn.id = id;
    btn.innerText = value;
    
    btnsContainer.append(btn);
}
createBtn('btn1', 'Russia');
createBtn('btn2', 'France');
createBtn('btn3', 'China');
createBtn('btn4', 'Kazachstan');

function createScoreContainer() {
    let scoreContainer = document.createElement('div');
    scoreContainer.classList.add('score__container');
    wrapper.append(scoreContainer);
}
createScoreContainer();
let scoreContainer = document.querySelector('.score__container'); 

function createStarImg() {
    // let star = document.createElement('img');
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

function createMessage() {
    let message = document.createElement('div');
    message.classList.add('message');
    wrapper.append(message);
}
createMessage();
let message = document.querySelector('.message');
message.innerText = 'WRONG';