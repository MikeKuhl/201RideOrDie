document.onkeydown = detectKey;

function detectKey(e) {

    var posLeft = document.getElementById('spooky').offsetLeft;

    e = e || window.event;

    if (e.keyCode == '37') {
         document.getElementById('spooky').style.marginLeft  = (posLeft+38)+"px";
     }
    else if (e.keyCode == '39') {
        document.getElementById('spooky').style.marginLeft  = (posLeft-38)+"px";
    }
  
}
// // start button

//const createBtn = (text = 'No text') => {
// const btn = document.createElement('button');
  //  BigInt.innterText = text;
  //  document.body.appendChild(btn);
  //  return btn;  
// };