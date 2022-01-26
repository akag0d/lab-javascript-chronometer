const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');
 

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinunes())[1];
  minDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0];
}

function printSeconds() {
  secUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1];
  secDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0];
}

// ==> BONUS
function printMilliseconds() {
  milUniElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliSeconds())[1];
  milDecElement.innerHTML = chronometer.computeTwoDigitNumber(chronometer.getMilliSeconds())[0];
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeftElement.classList.toggle('start');
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.innerHTML = 'STOP';
}

function setSplitBtn() {
  btnRightElement.classList.toggle('reset');
  btnRightElement.classList.toggle('split');
  btnRightElement.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeftElement.classList.toggle('stop');
  btnLeftElement.classList.toggle('start');
  btnLeftElement.innerHTML = 'START';
}

function setResetBtn() {
  btnRightElement.classList.toggle('split');
  btnRightElement.classList.toggle('reset');
  btnRightElement.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === 'START') {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === 'RESET') {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});









