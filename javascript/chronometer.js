class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;


  }

  start(callback) {
    /* this.currentTime += 1; */
    this.intervalId = setInterval (() => {
      this.currentTime += 1;
      callback;
    }, 1000);
  }

  getMinutes() {
    let minutes = 0;
    if (this.currentTime >= 60);
    minutes = Math.floor(this.currentTime / 60);
    return minutes

  }

  getSeconds() {
    let seconds = 0

    seconds = this.currentTime % 60

    return seconds

  }

  computeTwoDigitNumber(value) {
    return (value < 10) ? "0" + String(value) : String(value);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return (`${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`);
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}


