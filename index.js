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

//select a word at random and place it in word to guess element
//pick word random, replace #word-to-guess, replace letters with underscores. Display ten remaping guesses number in #remaing guesses


//keyup, check if letter is in word. 
//if in word, replace underscore.
//if not, add to incorrect letters, remaining guesses drop -1
//if repeated letter or non letter, no changes


//when final correct letter pressed, replace wins with +1, reset with new word. resest incorrect, reset guesses to 10.
//If run out of guesses, reset everthing and losses increase +1.