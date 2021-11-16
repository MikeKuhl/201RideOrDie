document.onkeydown = detectKey;
let keyPress = 0;
function detectKey(e) {
    let posLeft = document.getElementById('spooky').offsetLeft;
     e = e || window.event;

    if (e.keyCode == '37') {
         document.getElementById('spooky').style.marginLeft  = (posLeft+38)+"px";
         keyPress++
     }
    else if (e.keyCode == '39') {
        document.getElementById('spooky').style.marginLeft  = (posLeft-38)+"px";
        keyPress
    }
  
}
let posKnight = document.getElementById('knight').offsetRight;
let posLeft = document.getElementById('spooky').offsetLeft;




// function collision(){
// while(posLeft === -646 + 'px'){
// console.log('boom')
//     }
// }
// function collision() {
//     if(document.getElementById('spooky').style.marginLeft !== document.getElementById('knight').style.marginLeft){
//         console.log('no')
//     }
//     else if(document.getElementById('spooky').style.marginLeft === document.getElementById('knight').style.marginLeft){
//         console.log('boom')
//     }
// }

collision();
// // start button

//const createBtn = (text = 'No text') => {
// const btn = document.createElement('button');
  //  BigInt.innterText = text;
  //  document.body.appendChild(btn);
  //  return btn;  
// }