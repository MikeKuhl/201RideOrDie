document.onkeydown = detectKey;

function detectKey(e) {
    let posLeft = document.getElementById('spooky').offsetLeft;
     e = e || window.event;

    if (e.keyCode == '37') {
         document.getElementById('spooky').style.marginLeft  = (posLeft+38)+"px";
     }
    else if (e.keyCode == '39') {
        document.getElementById('spooky').style.marginLeft  = (posLeft-38)+"px";
    }
  
}
let posKnight = document.getElementById('knight');
let posLeft = document.getElementById('spooky').offsetLeft;

function collision() {
    if(document.getElementById('spooky').style.marginLeft !== document.getElementById('knight').style.marginLeft){
        console.log('no')
    }
    else if(document.getElementById('spooky').style.marginLeft === document.getElementById('knight').style.marginLeft){
        console.log('boom')
    }
}

collision();
// // start button

//const createBtn = (text = 'No text') => {
// const btn = document.createElement('button');
  //  BigInt.innterText = text;
  //  document.body.appendChild(btn);
  //  return btn;  
// }