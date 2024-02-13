var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var previousWord = document.getElementById("previous-word")
previousWord.innerHTML = "Im trying. i really am"
var incorrectLetters = document.getElementById("incorrect-letters")
incorrectLetters = []
incorrectLetters.innerHTML = incorrectLetters
var remainingGuesses = document.getElementById("remaining-guesses")
remainingGuesses.innerHTML = 10
var wins = document.getElementById("wins")
var losses = document.getElementById("losses")
wins = 0
losses = 0

var wordToGuess = document.getElementById("word-to-guess")

var word = words[Math.floor(Math.random() * words.length)]
console.log(word)



wordToGuess.innerHTML = word
 

document.onkeyup = function(e) {
  console.log(e.key)
  var key = e.key.toLowerCase
}

if (key = word.indexOf("t")) { 
  console.log("its in there")
}
  
 // if (word.indexOf(key) == -1) return

  //if (key === indexOf(word)) {

  

//var underscore = word.length 
//wordToGuess.innerHTML = underscore.replace(
  


 
//select a word at random and place it in word to guess element
//pick word random, replace #word-to-guess, replace letters with underscores. Display ten remaping guesses number in #remaing guesses



//keyup, check if letter is in word. 
//if in word, replace underscore.
//if not, add to incorrect letters, remaining guesses drop -1
//if repeated letter or non letter, no changes


//when final correct letter pressed, replace wins with +1, reset with new word. resest incorrect, reset guesses to 10.
//If run out of guesses, reset everthing and losses increase +1.