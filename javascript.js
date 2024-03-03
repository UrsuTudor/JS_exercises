/*function add7(a) {
    return a + 7
}

console.log(add7 (3))

let multiply = (a, b) => a * b


console.log(multiply(2, 3))

function capitalize(_string) {
    let uppercase = _string.toUpperCase();
    let sliceFirst = uppercase.slice(0,1)
    let sliceRest = uppercase.slice(1);
    let lowercase = sliceRest.toLowerCase();
    let capitalized = sliceFirst + lowercase;
    return capitalized
}

let lowercase = 'ThIs StRiNg Is CaPiTalIzEd'

console.log(capitalize(lowercase))

function capitalize2(_string) {
    let capitalizeFirst = _string.slice(0,1).toUpperCase()
    let lowerRest = _string.slice(1).toLowerCase()
    return capitalizeFirst + lowerRest
}

console.log(capitalize2(lowercase))

function lastLetter(_string) {
    return _string.slice(-1)
}

console.log(lastLetter(lowercase))
console.log(lastLetter('I like dogs'))

const a = "Hello";
const b = "World";

console.log(c);*/

let randomNumber = Math.floor(Math.random()) + 1;

  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('lowOrHi');
  const guessSubmit = document.querySelector('.guessSubmit');
  const guessField = document.querySelector('.guessField');

  let guessCount = 1;
  let resetButton;

  function checkGuess() {

    const userGuess = Number(guessField.value);
    if(guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if(guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  guessSubmit.addeventListener('click', checkGuess);

  function setGameOver() {
	  guessField.disabled = true;
	  guessSubmit.disabled = true;
	  resetButton = document.createElement('button');
	  resetButton.textContent = 'Start new game';
	  document.body.appendChild(resetButton);
	  resetButton.addeventListener('click', resetGame);
  }

  function resetGame() {
	  guessCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
	  resetButton.parentNode.removeChild(resetButton);

	  guessField.disabled = false;
	  guessSubmit.disabled = false;
	  guessField.value = '';
	  guessField.focus();

	  lastResult.style.backgroundColor = 'white';

	  randomNumber = Math.floor(Math.random()) + 1;
    }