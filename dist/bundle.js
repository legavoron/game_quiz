/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _star_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./star.svg */ \"./star.svg\");\n\n // ----------------------------------------------------- Layout ---------------------------------------------------\n\nfunction createfonImages() {\n  var wrapper = document.createElement('div');\n  wrapper.classList.add('wrapper');\n  document.body.append(wrapper);\n  var fonImage = document.createElement('img');\n  fonImage.src = 'https://p4.wallpaperbetter.com/wallpaper/412/1018/503/blue-the-world-black-background-world-map-mainland-hd-wallpaper-preview.jpg';\n  fonImage.alt = 'fonImage';\n  fonImage.classList.add('fon__image');\n  wrapper.append(fonImage);\n}\n\ncreatefonImages();\nvar wrapper = document.querySelector('.wrapper');\n\nfunction createContainerBox() {\n  var containerBox = document.createElement('div');\n  containerBox.classList.add('container__box');\n  wrapper.append(containerBox);\n}\n\ncreateContainerBox();\nvar containerBox = document.querySelector('.container__box');\n\nfunction createContainer() {\n  var container = document.createElement('div');\n  container.classList.add('container');\n  containerBox.append(container);\n}\n\ncreateContainer();\nvar container = document.querySelector('.container');\n\nfunction createFlagsBox() {\n  var flagBox = document.createElement('div');\n  flagBox.classList.add('flag__box');\n  container.append(flagBox);\n}\n\ncreateFlagsBox();\nvar flagBox = document.querySelector('.flag__box');\n\nfunction createFlag() {\n  var flag = document.createElement('img');\n  flag.classList.add('flag');\n  flagBox.append(flag);\n}\n\ncreateFlag();\nvar flag = document.querySelector('.flag');\n\nfunction createBtnsContainer() {\n  var btnsContainer = document.createElement('div');\n  btnsContainer.classList.add('btns__container');\n  containerBox.append(btnsContainer);\n}\n\ncreateBtnsContainer();\nvar btnsContainer = document.querySelector('.btns__container');\n\nfunction createBtn(id) {\n  var btn = document.createElement('a');\n  btn.classList.add('btn');\n  btn.id = id;\n  btnsContainer.append(btn);\n}\n\ncreateBtn('btn1');\ncreateBtn('btn2');\ncreateBtn('btn3');\ncreateBtn('btn4');\nvar btn1 = document.querySelector('#btn1');\nvar btn2 = document.querySelector('#btn2');\nvar btn3 = document.querySelector('#btn3');\nvar btn4 = document.querySelector('#btn4');\nvar btns = document.querySelectorAll('.btn');\n\nfunction createLandInfoBox() {\n  var landInfoBox = document.createElement('div');\n  landInfoBox.classList.add('land__info__box');\n  btnsContainer.append(landInfoBox);\n}\n\ncreateLandInfoBox();\nvar landInfoBox = document.querySelector('.land__info__box');\n\nfunction createLandInfoBoxContainer(id) {\n  var landInfoBoxContainer = document.createElement('span');\n  landInfoBoxContainer.classList.add('land_info_box_container');\n  landInfoBoxContainer.id = id;\n  landInfoBox.append(landInfoBoxContainer);\n}\n\ncreateLandInfoBoxContainer('landInfoBoxContainerName');\ncreateLandInfoBoxContainer('landInfoBoxContainerCountri');\ncreateLandInfoBoxContainer('landInfoBoxContainerPopulation');\n\nfunction createScoreContainer() {\n  var scoreContainer = document.createElement('div');\n  scoreContainer.classList.add('score__container');\n  wrapper.append(scoreContainer);\n}\n\ncreateScoreContainer();\nvar scoreContainer = document.querySelector('.score__container');\n\nfunction createStarImg() {\n  var star = new Image();\n  star.classList.add('star');\n  star.alt = 'star';\n  star.src = _star_svg__WEBPACK_IMPORTED_MODULE_1__;\n  scoreContainer.append(star);\n}\n\ncreateStarImg();\n\nfunction createPoints() {\n  var playerPoints = document.createElement('span');\n  playerPoints.classList.add('player__Points');\n  playerPoints.id = 'playerPoints';\n  scoreContainer.append(playerPoints);\n  var totalPoints = document.createElement('span');\n  totalPoints.classList.add('player__Points');\n  totalPoints.innerText = '/ 20';\n  scoreContainer.append(totalPoints);\n}\n\ncreatePoints();\nvar playerPoints = document.querySelector('#playerPoints');\nplayerPoints.innerText = 10;\n\nfunction createTimerContainer() {\n  var timerContainer = document.createElement('div');\n  timerContainer.classList.add('timer__container');\n  wrapper.append(timerContainer);\n  var timerSlider = document.createElement('div');\n  timerSlider.classList.add('timer__slider');\n  timerContainer.append(timerSlider);\n}\n\ncreateTimerContainer();\nvar timer = document.querySelector('.timer__slider');\n\nfunction createMessage() {\n  var message = document.createElement('div');\n  message.classList.add('message');\n  wrapper.append(message);\n}\n\ncreateMessage();\nvar message = document.querySelector('.message'); //------------------------------------------------------ Game -------------------------------------------------------------\n\nvar landResult = '';\nvar randomLand1 = '';\nvar randomLand2 = '';\nvar randomLand3 = '';\ngame();\n\nfunction game() {\n  hiddenInfoBox();\n  wrapper.removeEventListener('click', startNewGame);\n  var fetchInfo = fetch('https://api.sampleapis.com/countries/countries').then(function (response) {\n    return response.json();\n  }).then(function (landObj) {\n    var numLandResult = '';\n    var numLandRandom1 = '';\n    var numLandRandom2 = '';\n    var numLandRandom3 = '';\n    searchLands();\n\n    function searchLands() {\n      numLandResult = getRandomIntInclusive(1, landObj.length - 1);\n      numLandRandom1 = getRandomIntInclusive(1, landObj.length - 1);\n      numLandRandom2 = getRandomIntInclusive(1, landObj.length - 1);\n      numLandRandom3 = getRandomIntInclusive(1, landObj.length - 1);\n\n      if (numLandResult === numLandRandom1 || numLandResult === numLandRandom2 || numLandResult === numLandRandom3) {\n        searchLands();\n      }\n\n      if (numLandRandom1 === numLandRandom2 || numLandRandom1 === numLandRandom3) {\n        searchLands();\n      }\n\n      if (numLandRandom2 === numLandRandom3) {\n        searchLands();\n      }\n    }\n\n    landResult = landObj[numLandResult];\n    randomLand1 = landObj[numLandRandom1];\n    randomLand2 = landObj[numLandRandom2];\n    randomLand3 = landObj[numLandRandom3];\n    console.log(landResult.name);\n    console.log(landResult);\n    flag.src = landResult.media.flag;\n    checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);\n  });\n}\n\nfunction checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3) {\n  flag.onload = function () {\n    setBtnsValues();\n    startTimer();\n    btns.forEach(function (elem) {\n      elem.addEventListener('click', checkAnswer);\n    });\n  };\n\n  flag.onerror = function () {\n    var num = getRandomIntInclusive(1, landObj.length - 1);\n\n    if (num === numLandRandom1 || num === numLandRandom2 || num === numLandRandom3) {\n      checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);\n    }\n\n    if (numLandRandom1 === numLandRandom2 || numLandRandom1 === numLandRandom3) {\n      checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);\n    }\n\n    if (numLandRandom2 === numLandRandom3) {\n      checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);\n    }\n\n    landResult = landObj[num];\n    flag.src = landResult.media.flag;\n    checkFlagLoad(landObj, numLandRandom1, numLandRandom2, numLandRandom3);\n  };\n}\n\nfunction setBtnsValues() {\n  var arr = [btn1, btn2, btn3, btn4];\n  var random = getRandomIntInclusive(0, 3);\n  arr[random].innerHTML = landResult.name;\n  arr.splice(random, 1);\n  arr[0].innerHTML = randomLand1.name;\n  arr[1].innerHTML = randomLand2.name;\n  arr[2].innerHTML = randomLand3.name;\n}\n\nfunction checkAnswer() {\n  clearInterval(timerGo);\n  timer.style.width;\n\n  if (this.innerHTML === landResult.name) {\n    morePoints();\n    btns.forEach(function (elem) {\n      elem.removeEventListener('click', checkAnswer);\n    });\n    this.style.backgroundColor = '#02705C';\n    setTimeout(function () {\n      showMessage('#02705C', 'Right', 'flex');\n      setTimeout(function () {\n        message.style.display = 'none';\n        showLandsInfo();\n      }, 1000);\n    }, 500);\n  } else {\n    lessPoinnts();\n    btns.forEach(function (elem) {\n      elem.removeEventListener('click', checkAnswer);\n    });\n    this.style.backgroundColor = '#A30312';\n    btns.forEach(function (elem) {\n      if (elem.innerHTML === landResult.name) {\n        elem.style.backgroundColor = '#02705C';\n      }\n    });\n    setTimeout(function () {\n      showMessage('#A30312', 'Wrong', 'flex');\n      setTimeout(function () {\n        message.style.display = 'none';\n        showLandsInfo();\n      }, 1000);\n    }, 500);\n  }\n}\n\nfunction getRandomIntInclusive(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nfunction showLandsInfo() {\n  showInfoBox();\n  btns.forEach(function (elem) {\n    elem.style.display = 'none';\n  });\n  var infoName = document.querySelector('#landInfoBoxContainerName');\n  var infoCountry = document.querySelector('#landInfoBoxContainerCountri');\n  var infoPopulation = document.querySelector('#landInfoBoxContainerPopulation');\n  infoName.innerHTML = \"Land: \".concat(landResult.name);\n\n  if (landResult.capital) {\n    infoCountry.innerHTML = \"Capital: \".concat(landResult.capital);\n  }\n\n  if (landResult.population) {\n    var num = editNumPeople();\n    infoPopulation.innerHTML = \"Population: \".concat(num, \" people\");\n  }\n\n  showResultMessage();\n}\n\nfunction editNumPeople() {\n  var num = landResult.population;\n  num += \"\";\n  num = num.split('');\n\n  if (num.length > 3) {\n    num.splice(-3, 0, \" \");\n  }\n\n  if (num.length > 7) {\n    num.splice(-7, 0, \" \");\n  }\n\n  if (num.length > 10) {\n    num.splice(-10, 0, \" \");\n  }\n\n  if (num.length > 13) {\n    num.splice(-13, 0, \" \");\n  }\n\n  return num.join('');\n}\n\nfunction showInfoBox() {\n  btnsContainer.style.backgroundColor = '#BDD4F2';\n  btnsContainer.style.borderRadius = '20px';\n  btnsContainer.style.border = '10px solid white';\n  btnsContainer.style.boxSizing = \"border-box\";\n  landInfoBox.style.display = 'flex';\n  btns.forEach(function (elem) {\n    elem.innerHTML = '';\n  });\n}\n\nfunction hiddenInfoBox() {\n  btnsContainer.style.backgroundColor = '#11ffee00';\n  btnsContainer.style.borderRadius = '20px';\n  btnsContainer.style.border = 'none';\n  btnsContainer.style.boxSizing = \"content-box\";\n  landInfoBox.style.display = 'none';\n  btns.forEach(function (elem) {\n    elem.style.display = 'flex';\n    elem.style.backgroundColor = '#4F5C88';\n  });\n}\n\nfunction startNewGame() {\n  cleanResult();\n  hiddenInfoBox();\n  game();\n}\n\nfunction morePoints() {\n  var num = +playerPoints.innerHTML + 1;\n  playerPoints.innerHTML = num + '';\n}\n\nfunction lessPoinnts() {\n  var num = +playerPoints.innerHTML - 1;\n  playerPoints.innerHTML = num + '';\n}\n\nfunction showResultMessage() {\n  var num = +playerPoints.innerHTML;\n  clearInterval(timerGo);\n\n  if (num === 20) {\n    showMessage('#02705C', 'You Win!', 'flex');\n  }\n\n  if (num === 0) {\n    showMessage('#A30312', 'You Lose!', 'flex');\n  }\n\n  wrapper.addEventListener('click', startNewGame);\n}\n\nfunction showMessage(color, text, view) {\n  message.style.backgroundColor = color;\n  message.innerHTML = text;\n  message.style.display = view;\n}\n\nfunction cleanResult() {\n  if (message.innerHTML === 'You Lose!' || message.innerHTML === 'You Win!') {\n    message.innerHTML = \"\";\n    message.style.display = 'none';\n    playerPoints.innerHTML = '10';\n  }\n} // ---------------------------------------------- Timer ----------------------------------------------\n\n\nfunction startTimer() {\n  timer.style.width = '100%';\n  reductionTimer();\n}\n\nvar timerGo;\n\nfunction reductionTimer() {\n  var num = parseInt(timer.style.width);\n  var percentNum = num / 200;\n  timerGo = setInterval(start, 50);\n\n  function start() {\n    num = num - percentNum;\n    timer.style.width = \"\".concat(num, \"%\");\n\n    if (num <= 0.15) {\n      timer.style.width = \"0%\";\n      clearInterval(timerGo);\n      showMessage('#A30312', 'You Lose!', 'flex');\n      btns.forEach(function (elem) {\n        elem.removeEventListener('click', checkAnswer);\n      });\n      wrapper.addEventListener('click', startNewGame);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./style.css":
/*!**********************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./style.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body{\\r\\n    overflow: hidden;\\r\\n    height: 100vh;\\r\\n    margin: 0;\\r\\n    font-family: 'Arima Madurai', cursive;\\r\\n    font-family: 'Comfortaa', cursive;\\r\\n    font-family: 'Glory', sans-serif;\\r\\n    font-family: 'Marck Script', cursive;\\r\\n    font-family: 'Montserrat', sans-serif;\\r\\n    font-family: 'Noto Sans', sans-serif;\\r\\n    font-family: 'Noto Sans Mono', monospace;\\r\\n    font-family: 'Open Sans', sans-serif;\\r\\n    font-family: 'Orelega One', cursive;\\r\\n    font-family: 'Press Start 2P', cursive;\\r\\n    font-family: 'PT Sans', sans-serif;\\r\\n}\\r\\n.wrapper{\\r\\n    width: 100vw;\\r\\n    height: 100vh;\\r\\n    display: flex;\\r\\n    align-items: flex-start;\\r\\n    justify-content: center;\\r\\n    overflow: hidden;\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.fon__image{\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    object-fit: cover;\\r\\n}\\r\\n.container__box{\\r\\n    width: 50%;\\r\\n    height: 100%;\\r\\n    z-index: 2;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: flex-start;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.container{\\r\\n    width: 80%;\\r\\n    height: 55vh;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    background-color: #BDD4F2;\\r\\n    margin-top: 3vh;\\r\\n    margin-bottom: 3vh;\\r\\n    border-radius: 20px;\\r\\n    border: 10px solid white;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n.flag__box{\\r\\n    width: 80%;\\r\\n    height: 80%;\\r\\n    position: relative;\\r\\n    background-color: #BDD4F2;\\r\\n    box-shadow: 9px 9px 21px -15px rgba(34, 60, 80, 0.23);\\r\\n}\\r\\n.flag{\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    object-fit: fill;\\r\\n}\\r\\n.btns__container{\\r\\n    width: 80%;\\r\\n    height: 35vh;\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.btn{\\r\\n    height: 44%;\\r\\n    width: 44%;\\r\\n    margin: 0.5rem;\\r\\n    font-size: 2vw;\\r\\n    text-decoration: none;\\r\\n    color: #ffffff;\\r\\n    background-color: #4F5C88;\\r\\n    border-radius: 12px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    cursor: pointer;\\r\\n    word-break: break-word;\\r\\n    text-align: center;\\r\\n    /* display: none; */\\r\\n}\\r\\n.btn:active {\\r\\n    text-decoration: none;\\r\\n    background-color: #5E6B98;\\r\\n}\\r\\n.land__info__box{\\r\\n    position: absolute;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    /* display: flex; */\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    flex-direction: column;\\r\\n    display: none;\\r\\n    background-color: #BDD4F2;\\r\\n    z-index: 2;\\r\\n    display: none;\\r\\n}\\r\\n.land_info_box_container{\\r\\n    width: 100%;\\r\\n    height: 30%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    z-index: 3;\\r\\n    background-color: #BDD4F2;\\r\\n    font-size: 3vh;\\r\\n    text-align: center;\\r\\n}\\r\\n.score__container{\\r\\n    position: absolute;\\r\\n    left: 3vh;\\r\\n    top: 3vh;\\r\\n    width: 15vw;\\r\\n    height: 10vh;\\r\\n    background-color: #D9AD5B;\\r\\n    border-radius: 10px;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.timer__container{\\r\\n    position: absolute;\\r\\n    left: 3vh;\\r\\n    top: 15vh;\\r\\n    width: 15vw;\\r\\n    height: 5vh;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: flex-start;\\r\\n}\\r\\n.timer__slider{\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: #02705C;\\r\\n}\\r\\n.star{\\r\\n    height: 80%;\\r\\n}\\r\\n.player__Points{\\r\\n    width: 30%;\\r\\n    font-size: 2vw;\\r\\n    text-align: center;\\r\\n    color: white;\\r\\n    font-weight: 800;\\r\\n}\\r\\n.message{\\r\\n    position: absolute;\\r\\n    z-index: 3;\\r\\n    width: 100%;\\r\\n    height: 22%;\\r\\n    left: 0;\\r\\n    top: 39%;\\r\\n    color:white;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    font-size: 5vw;\\r\\n    font-weight: 900;\\r\\n    /* background-color: #A30312; */\\r\\n    background-color: #02705C;\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n@media(max-width:1000px) {\\r\\n    .container__box{\\r\\n        width: 100%;\\r\\n        padding: 0 3vh;\\r\\n    }\\r\\n    .container{\\r\\n        width: 100%;\\r\\n        height: 46vh;\\r\\n        margin-top: 13vh;\\r\\n    }\\r\\n    .flag__box{\\r\\n        height: 50%;\\r\\n    }\\r\\n    .score__container{\\r\\n        width: 30vw;\\r\\n        height: 7vh;\\r\\n    }\\r\\n    .player__Points{\\r\\n        font-size: 4.1vw;\\r\\n    }\\r\\n    .btns__container{\\r\\n        width: 100%;\\r\\n    }\\r\\n    .btn{\\r\\n        padding: 5px;\\r\\n        font-size: 5vw;\\r\\n        height: 38%;\\r\\n    }\\r\\n    .message{\\r\\n        font-size: 10vw;\\r\\n    }\\r\\n    .timer__container{\\r\\n        top: 3vh;\\r\\n        left: auto;\\r\\n        right: 3vh;\\r\\n        width: 30vw;\\r\\n        height: 7vh;\\r\\n    }\\r\\n    .star{\\r\\n        height: 60%;\\r\\n    }\\r\\n}\\r\\n\\r\\n\\r\\n/* --------------------------------------------------  Mobile Horizontal -------------------------*/\\r\\n\\r\\n@media(max-height:500px) {\\r\\n    .btn{\\r\\n        font-size: 2vw;\\r\\n    }\\r\\n    .flag__box{\\r\\n        height: 80%;\\r\\n        width: 35%;\\r\\n    }\\r\\n    .score__container{\\r\\n        width: 12vw;\\r\\n        height: 7vh;\\r\\n    }\\r\\n    .player__Points{\\r\\n        font-size: 1.5vw;\\r\\n    }\\r\\n    .container{\\r\\n        margin-bottom: 5px;\\r\\n    }\\r\\n    .message{\\r\\n        font-size: 8vw;\\r\\n    }\\r\\n    .land_info_box_container{\\r\\n        font-size: 6vh;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!***************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./star.svg":
/*!******************!*\
  !*** ./star.svg ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"29a504efc0582c0b7b7a.svg\";\n\n//# sourceURL=webpack:///./star.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;