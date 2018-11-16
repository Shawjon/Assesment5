function rightAnswer1(){
    sleep(3000);
    //document.getElementById("answer-1").innerHTML = "correct";
    alert("That is correct");
    resetAera("answer-1");
}
function rightAnswer2(){
    sleep(3000);
    //document.getElementById("answer-2").innerHTML = "correct";
    alert("That is correct");
    resetAera("answer-2");
}
function rightAnswer3(){
    sleep(3000);
    //document.getElementById("answer-3").innerHTML = "correct";
    alert("That is correct");
    resetAera("answer-3");
}
function rightAnswer4(){
    sleep(3000);
    //document.getElementById("answer-4").innerHTML = "correct";
    alert("That is correct");
    resetAera("answer-4");
}
function wrongAnswer1(){
    sleep(3000);
    document.getElementById("answer-1").innerHTML = "Wrong";
}
function wrongAnswer2(){
    sleep(3000);
    document.getElementById("answer-2").innerHTML = "Wrong, That is a dog silly";
}
function wrongAnswer3(){
    sleep(3000);
    document.getElementById("answer-3").innerHTML = "Wrong";
}
function wrongAnswer4(){
    sleep(3000);
    document.getElementById("answer-4").innerHTML = "Wrong";
}

function resetAera(x){
    sleep(3000);
    document.getElementById( x).innerHTML = "Next Question";
    
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }