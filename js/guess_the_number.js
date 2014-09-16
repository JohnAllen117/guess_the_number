var MAX = 100;
var randomNumber = Math.floor((Math.random() * MAX) + 1);
var numGuesses = 0;
$('form').on('submit', function(event){
  event.preventDefault();
  numGuesses++;


  var userInput = $('#input').val();
  $('body').append('<p style="font-weight:bold;">You entered ' + userInput + '</p>');

  if(userInput > randomNumber){
    $('body').append('<p style="font-weight:bold;">your guess was too high!');
  }else if(userInput < randomNumber){
    $('body').append('<p style="font-weight:bold;">your guess was too low!');
  } else {
    $('body').append('<p style="font-weight:bold;">You win! You played ' + numGuesses + ' number of time(s).</p>');
  }

  $('#input').val('');
});
