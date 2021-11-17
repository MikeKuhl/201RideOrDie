
let keyPress = 0;
// addEventListeners();

function detectKey(e) {
  let posLeft = document.getElementById("spooky").offsetLeft;
  e = e || window.event;

  if (e.keyCode == "37") {
    document.getElementById("spooky").style.marginLeft = posLeft + 38 + "px";
    keyPress -= 1;
  } else if (e.keyCode == "39") {
    document.getElementById("spooky").style.marginLeft = posLeft - 38 + "px";
    keyPress++;
  }

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
        else 
            (btn.value == "Enter the Dungeon")
                
          
    }
    // function addEventListeners(){

    //         const container = document.documentElement;
    //         container.addEventListener('keydown' , detectKey);
        
    //     }

    // function stopEventListeners() {
    //     const container = document.documentElement;
    //     container.removeEventListener('keydown', detectKey);
    // }
        
  

function posPrompt() {
  if (keyPress === 16) {
    console.log("working");
    showQuestion(question);
    document.getElementById('knight').hidden = false;
  } else if (keyPress > 16){
    document.getElementById('knight').hidden = true;
  } else if (keyPress < 16) {
    document.getElementById('knight').hidden = true;
  }
  
}


