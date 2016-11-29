var to;

function collatz(number){
  var aud = document.getElementById("alarm");
  if (number===1){
    aud.play();
    return;
  }else if (number%2===0){
    number = number/2;
  } else {
    number = 3 * number + 1;
  }
  document.getElementById("timer").innerHTML = number;
  to = setTimeout(function(){collatz(number)}, 1000);
}

function stop(number){
  clearTimeout(to);
  document.getElementById("alarm").pause();
  document.getElementById("timer").innerHTML = number;
}

function reset(number){
  stop(number);
  collatz(number);
}
