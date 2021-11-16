
let keyPress = 0;

function detectKey(e) {
  let posLeft = document.getElementById("spooky").offsetLeft;
//   let btn = document.getElementById("startButton");
  e = e || window.event;

  if (e.keyCode == "37") {
    document.getElementById("spooky").style.marginLeft = posLeft + 38 + "px";
    keyPress -= 1;
  } else if (e.keyCode == "39") {
    document.getElementById("spooky").style.marginLeft = posLeft - 38 + "px";
    keyPress++;
  }
//   else if (btn.value == "Enter the Dungeon"){
//       return;
//   }
  console.log(keyPress);

  posPrompt();
}


function change(){
    let btn = document.getElementById("startButton");
    document.onkeydown = detectKey;
    if (btn.value == "Enter the Dungeon"){ 
        btn.value = "Exit the Dungeon"
    }
    else {
        stop();
    }
}

    function stop(){
    let btn = document.getElementById("startButton");
        if (btn.value == "Exit the Dungeon"){ 
            btn.value = "Enter the Dungeon"
        }
        else { 
            (btn.value == "Enter the Dungeon")
        }  
    }
        
  

function posPrompt() {
  if (keyPress == 16) {
    console.log("working");
    showQuestion(question);
  }
}


