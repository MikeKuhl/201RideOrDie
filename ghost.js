document.onkeydown = detectKey;
let keyPress = 0;

function detectKey(e) {
    let posLeft = document.getElementById('spooky').offsetLeft;
     e = e || window.event;

    if (e.keyCode == '37') {
         document.getElementById('spooky').style.marginLeft  = (posLeft+38)+"px";
         keyPress -= 1
     }
    else if (e.keyCode == '39') {
        document.getElementById('spooky').style.marginLeft  = (posLeft-38)+"px";
        keyPress++
    } 
    console.log(keyPress)
    posPrompt();
}

function posPrompt(){
    if(keyPress == 16){
        console.log("working")
    }
}

function change(){
    let btn = document.getElementById("startButton");
    if (btn.value=="Enter the Dungeon"){ 
        btn.value = "Exit the Dungeon"
    }
    else btn.value = "Exit the Dungeon";
    }
    function stop(){
        change();
        
    }

// collision();
// // start button

//const createBtn = (text = 'No text') => {
// const btn = document.createElement('button');
  //  BigInt.innterText = text;
  //  document.body.appendChild(btn);
  //  return btn;  
// }