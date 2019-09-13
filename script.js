var randomNumber = Math.floor(Math.random() * 5) + 1;
var guess = prompt ('I am thinking of a number between 1 and 5. What is it?');
if (parseInt(guess) === randomNumber) {
  document.write('<p> You got it!</p>');
} else {
  document.write('<p>Sorry. It was ' + randomNumber + '</p>');
}