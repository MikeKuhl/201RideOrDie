let canMove = true;
let keyPress = 0;
let lives = 4;
// addEventListeners();

function detectKey(e) {
    if (canMove){
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
}


function change(){
    let btn = document.getElementById("startButton");
    document.onkeydown = detectKey;
    if (btn.value == "Enter the Dungeon"){ 
        canMove = true;
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
            canMove = false;  
    }
 
    // function addEventListeners(){

    //         const container = document.documentElement;
    //         container.addEventListener('keydown' , detectKey);
        
    //     }

    // function stopEventListeners() {
    //     const container = document.documentElement;
    //     container.removeEventListener('keydown', detectKey);
    // }
  
    const hearts = [document.getElementById('heart1'), document.getElementById('heart2'), document.getElementById('heart3'), document.getElementById('heart4') ]
    
function livesCheck(){
    // let h1 = document.getElementById('heart1')
    // let h2 = document.getElementById('heart2')
    for(i = 0; i < hearts.length; i++){
      if(lives === 3){
          hearts[0].remove();
      }
      else if (lives === 2){
          hearts[1].remove();
      }
    else if( lives === 1){
        hearts[2].remove();
       }
    else if(lives === 0){
        hearts[3].remove();
        document.getElementById('gameover').hidden = false;
        document.getElementById('restart').removeAttribute('hidden');

        }
        else {
            console.log('nice')
        }
    }
}
 

function posPrompt() {
  if (keyPress === 21) {
    console.log("working");
    showQuestion(question);
    document.getElementById('knight').hidden = false;
    canMove = false;
  } else if (keyPress > 21){
    document.getElementById('knight').hidden = true;
    canMove = true;
  } else if (keyPress < 21) {
    document.getElementById('knight').hidden = true;
    canMove = true;
  }
  else {
      canMove = true;
      return;
  }
  
}



