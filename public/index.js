
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    let lastHole
    let timeUp = false;
    let score = 0;
    let startButton = document.querySelector("#startbutton")

    function randomTime(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    function randomHole(holes) {
      const idx =Math.floor(Math.random() * holes.length)
      const hole = holes[idx];
      if (lastHole === hole) {
        return randomHole(holes)
      }
      lastHole = hole
      return hole;
    }


    function peep() {
      let time = randomTime(1000, 2000);
      let hole = randomHole(holes);
      hole.classList.add('up');
      setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) peep();
      }, time)
    }

    function startGame() {
      score = 0;
      scoreBoard.textContent = 0;
      timeUp = false;
      peep();
      startButton.disabled = true;
      setTimeout(() => {
        timeUp = true
        startButton.disabled = false;
      }, 6000)
    }

    function bonk(e) {
      if (!e.isTrusted) return
      score++;
      scoreBoard.textContent = score;
      this.parentNode.classList.remove('up');
      this.classList.add('shaking')
      setTimeout(()=>{
        this.classList.remove('shaking')
      },400)
    }

    moles.forEach(mole => mole.addEventListener('click', bonk))
  