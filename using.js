function rightAnswer1(){
    sleep(3000);
    resetAera("answer-1");
    alert("That is correct!");
}
function rightAnswer2(){
    sleep(3000);
    resetAera("answer-2");
    alert("That is correct!");
}
function rightAnswer3(){
    sleep(3000);
    resetAera("answer-3");
    alert("That is correct!");
}
function rightAnswer4(){
    sleep(3000);
    resetAera("answer-4");
    alert("That is correct!");
}
function wrongAnswer1(){
    sleep(3000);
    document.getElementById("answer-1").innerHTML = "Wrong - Try again";
}
function wrongAnswer2(){
    sleep(3000);
    document.getElementById("answer-2").innerHTML = "Wrong, That is a dog silly";
}
function wrongAnswer3(){
    sleep(3000);
    document.getElementById("answer-3").innerHTML = "Wrong - Try again";
}
function wrongAnswer4(){
    sleep(3000);
    document.getElementById("answer-4").innerHTML = "Wrong - Try again";
}

function resetAera(x){
    sleep(3000);
    document.getElementById( x).innerHTML = "Correct! - Next Question";
    
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }