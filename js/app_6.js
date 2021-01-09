// HTML Elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');
// game constants
const xSymbol = '×';
const oSymbol = '○';
// game variables
let gameIsLive = true;
let xIsNext = true;
// functions**********************************************************
const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};

const checkGameStatus = () => {
  const topLeft = cellDivs[0].classList[1];
  const topMiddle1 = cellDivs[1].classList[1];
  const topMiddle2 = cellDivs[2].classList[1];
  const topMiddle3 = cellDivs[3].classList[1];
  const topMiddle4 = cellDivs[4].classList[1];
  const topRight = cellDivs[5].classList[1];
 
  const m1Left = cellDivs[6].classList[1];
  const m1Middle1 = cellDivs[7].classList[1];
  const m1Middle2 = cellDivs[8].classList[1];
  const m1Middle3 = cellDivs[9].classList[1];
  const m1Middle4 = cellDivs[10].classList[1];
  const m1Right = cellDivs[11].classList[1];
     
  const m2Left = cellDivs[12].classList[1];
  const m2Middle1 = cellDivs[13].classList[1];
  const m2Middle2 = cellDivs[14].classList[1];
  const m2Middle3 = cellDivs[15].classList[1];
  const m2Middle4 = cellDivs[16].classList[1];
  const m2Right = cellDivs[17].classList[1];
    
  const m3Left = cellDivs[18].classList[1];
  const m3Middle1 = cellDivs[19].classList[1];
  const m3Middle2 = cellDivs[20].classList[1];
  const m3Middle3 = cellDivs[21].classList[1];
  const m3Middle4 = cellDivs[22].classList[1];
  const m3Right = cellDivs[23].classList[1];
 
  const m4Left = cellDivs[24].classList[1];
  const m4Middle1 = cellDivs[25].classList[1];
  const m4Middle2 = cellDivs[26].classList[1];
  const m4Middle3 = cellDivs[27].classList[1];
  const m4Middle4 = cellDivs[28].classList[1];
  const m4Right = cellDivs[29].classList[1];

  const bottomLeft = cellDivs[30].classList[1];
  const bottomMiddle1 = cellDivs[31].classList[1];
  const bottomMiddle2 = cellDivs[32].classList[1];
  const bottomMiddle3 = cellDivs[33].classList[1];
  const bottomMiddle4 = cellDivs[34].classList[1];
  const bottomRight = cellDivs[35].classList[1];
 

  // check winner
  if (topLeft && topLeft === topMiddle1 && topLeft === topMiddle2 && topLeft === topMiddle3&&topLeft === topMiddle4 && topMiddle4 === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');



  } else if (m1Left && m1Left === m1Middle1 && m1Left === m1Middle2 && m1Left === m1Middle3 && m1Left === m1Middle4 && m1Right === m1Middle4) {
    handleWin(m1Left);
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
    cellDivs[9].classList.add('won');
    cellDivs[10].classList.add('won');
    cellDivs[11].classList.add('won');


  } else if (m2Left && m2Left === m2Middle1 && m2Left === m2Middle2 && m2Left === m2Middle3 &&m2Left === m2Middle4 && m2Middle4 === m2Right) {
    handleWin(m2Left);    
    
    cellDivs[12].classList.add('won');
    cellDivs[13].classList.add('won');
    cellDivs[14].classList.add('won');
    cellDivs[15].classList.add('won');
    cellDivs[16].classList.add('won'); 
    cellDivs[17].classList.add('won');


  } else if (m3Left && m3Left === m3Middle1 && m3Left === m3Middle2 && m3Left === m3Middle3&&m3Left === m3Middle4 && m3Middle4 === m3Right) {
    handleWin(m3Left);    
    cellDivs[18].classList.add('won');
    cellDivs[19].classList.add('won');
    cellDivs[20].classList.add('won');
    cellDivs[21].classList.add('won');
    cellDivs[22].classList.add('won');
    cellDivs[23].classList.add('won');


  }  else if (m4Left && m4Left === m4Middle1 && m4Left === m4Middle2 && m4Left === m4Middle3 && m4Left === m4Middle4 && m4Middle4 === m4Right) {
    handleWin(m4Left);    
    cellDivs[24].classList.add('won');
    cellDivs[25].classList.add('won');
    cellDivs[26].classList.add('won');
    cellDivs[27].classList.add('won');
    cellDivs[28].classList.add('won');
    cellDivs[29].classList.add('won');


  } else if (bottomLeft && bottomLeft === bottomMiddle1 && bottomLeft === bottomMiddle2 && bottomLeft === bottomMiddle3 &&bottomLeft=== bottomMiddle4 && bottomRight === bottomMiddle4) {
    handleWin(bottomLeft);
    cellDivs[30].classList.add('won');
    cellDivs[31].classList.add('won');
    cellDivs[32].classList.add('won');
    cellDivs[33].classList.add('won');
    cellDivs[34].classList.add('won');
    cellDivs[35].classList.add('won');//****************************************************finish

  } else if (topLeft && topLeft === m1Left && topLeft === m2Left && topLeft === m3Left && topLeft === m4Left &&topLeft === bottomLeft&& topLeft === m4Left) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[12].classList.add('won');
    cellDivs[18].classList.add('won');
    cellDivs[24].classList.add('won');
    cellDivs[30].classList.add('won');


  } else if (topMiddle1 && topMiddle1 === m1Middle1 && topMiddle1 === m2Middle1 && topMiddle1 === m3Middle1 && topMiddle1 === m4Middle1 && m4Middle1 === bottomMiddle1) {
    handleWin(topMiddle1);
    cellDivs[1].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[13].classList.add('won');
    cellDivs[19].classList.add('won');
    cellDivs[25].classList.add('won');
    cellDivs[31].classList.add('won');


  } else if (topMiddle2 && topMiddle2 === m1Middle2 && topMiddle2 === m2Middle2&&topMiddle2 === m3Middle2 && topMiddle2 === m4Middle2 && m4Middle2 ===      bottomMiddle2) {
    handleWin(topMiddle2);
    cellDivs[2].classList.add('won');
    cellDivs[8].classList.add('won');
    cellDivs[14].classList.add('won');
    cellDivs[20].classList.add('won');
    cellDivs[26].classList.add('won');
    cellDivs[32].classList.add('won');


  } else if (topMiddle3 && topMiddle3 === m1Middle3 && topMiddle3 === m2Middle3 && topMiddle3 === m3Middle3&&topMiddle3 === m4Middle3 && m4Middle3 ===    bottomMiddle3) {
    handleWin(topMiddle3);
    cellDivs[3].classList.add('won');
    cellDivs[9].classList.add('won');
    cellDivs[15].classList.add('won');
    cellDivs[21].classList.add('won');
    cellDivs[27].classList.add('won');
    cellDivs[33].classList.add('won');

  } else if (topMiddle4 && topMiddle4 === m1Middle4 && topMiddle4 === m2Middle4 && topMiddle4 === m3Middle4 && topMiddle4 === m4Middle3 && m4Middle4 === bottomMiddle4) {
    handleWin(topMiddle4);
    cellDivs[4].classList.add('won');
    cellDivs[10].classList.add('won');
    cellDivs[16].classList.add('won');
    cellDivs[22].classList.add('won');
    cellDivs[28].classList.add('won');
    cellDivs[34].classList.add('won');

  }
    else if (topRight && topRight === m1Right && topRight === m2Right && topRight === m3Right && topRight === m4Right && m4Right === bottomRight) {
    handleWin(topRight);
    cellDivs[5].classList.add('won');
    cellDivs[11].classList.add('won');
    cellDivs[17].classList.add('won');
    cellDivs[23].classList.add('won');
    cellDivs[29].classList.add('won');
    cellDivs[35].classList.add('won');//***********************************************finish
        
  } else if (topLeft && topLeft === m1Middle1 && topLeft === m2Middle2 && topLeft === m3Middle3 &&topLeft === m4Middle4 && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[14].classList.add('won');
    cellDivs[21].classList.add('won');
    cellDivs[28].classList.add('won');
    cellDivs[35].classList.add('won');

  } else if (topRight && topRight === m1Middle4 && topRight === m2Middle3 && topRight === m3Middle2&&topRight ===m4Middle1 && m4Middle1 === bottomLeft) {
    handleWin(topRight);
    cellDivs[5].classList.add('won');
    cellDivs[10].classList.add('won');
    cellDivs[15].classList.add('won');
    cellDivs[20].classList.add('won');
    cellDivs[25].classList.add('won');
    cellDivs[30].classList.add('won');


  } else if (topLeft && topMiddle1 && topMiddle2 && topMiddle3 && topMiddle4 && topRight &&
             m1Left && m1Middle1 && m1Middle2 && m1Middle3 && m1Middle4 && m1Right &&
             m2Left && m2Middle1 && m2Middle2 && m2Middle3 && m2Middle4 && m2Right &&
             m3Left&&m3Middle1&&m3Middle2&&m3Middle3&&m3Middle4&&m3Right&&
             bottomLeft && bottomMiddle1 && bottomMiddle2 && bottomMiddle3 && bottomRight) {
    gameIsLive = false;
    statusDiv.innerHTML = 'Game is tied!';
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusDiv.innerHTML = `${xSymbol} is next`;
    } else {
      statusDiv.innerHTML = `<span>${oSymbol} is next</span>`;
    }
  }
};
//********************************************************************
// event Handlers
const handleReset = () => {
  xIsNext = true;
  statusDiv.innerHTML = `${xSymbol} is next`;
  for (const cellDiv of cellDivs) {
    cellDiv.classList.remove('x');
    cellDiv.classList.remove('o');
    cellDiv.classList.remove('won');
  }
  gameIsLive = true;
};

const handleCellClick = (e) => {
  const classList = e.target.classList;

  if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
    return;
  }

  if (xIsNext) {
    classList.add('x');
    checkGameStatus();
  } else {
    classList.add('o');
    checkGameStatus();
  }
 
};
//********************************************************************
// event listeners
resetDiv.addEventListener('click', handleReset);
for (const cellDiv of cellDivs) {
  cellDiv.addEventListener('click', handleCellClick)
}

let colinput =document.querySelector('#color');
let hexinput =document.querySelector('#hex'); 
function fun_color() {
    let color=colinput.value;
    hexinput.value=color;
    document.querySelector('.container').style.backgroundColor=color;
  // document.querySelector('.game-grid').style.backgroundColor=color;
        document.querySelector('#g1').style.backgroundColor=color;
        document.querySelector('#g2').style.backgroundColor=color;
        document.querySelector('#g3').style.backgroundColor=color;
        document.querySelector('#g4').style.backgroundColor=color;
        document.querySelector('#g5').style.backgroundColor=color;
        document.querySelector('#g6').style.backgroundColor=color;
        document.querySelector('#g7').style.backgroundColor=color;
        document.querySelector('#g8').style.backgroundColor=color;
        document.querySelector('#g9').style.backgroundColor=color;
        document.querySelector('#g10').style.backgroundColor=color;
        document.querySelector('#g11').style.backgroundColor=color;
        document.querySelector('#g12').style.backgroundColor=color;
        document.querySelector('#g13').style.backgroundColor=color;
        document.querySelector('#g14').style.backgroundColor=color;
        document.querySelector('#g15').style.backgroundColor=color;
        document.querySelector('#g16').style.backgroundColor=color;
        document.querySelector('#g17').style.backgroundColor=color;
        document.querySelector('#g18').style.backgroundColor=color;
        document.querySelector('#g19').style.backgroundColor=color;
        document.querySelector('#g20').style.backgroundColor=color;
        document.querySelector('#g21').style.backgroundColor=color;
        document.querySelector('#g22').style.backgroundColor=color;
        document.querySelector('#g23').style.backgroundColor=color;
        document.querySelector('#g24').style.backgroundColor=color;
        document.querySelector('#g25').style.backgroundColor=color;
        document.querySelector('#g26').style.backgroundColor=color;
        document.querySelector('#g27').style.backgroundColor=color;
        document.querySelector('#g28').style.backgroundColor=color;
        document.querySelector('#g29').style.backgroundColor=color;
        document.querySelector('#g30').style.backgroundColor=color;
        document.querySelector('#g31').style.backgroundColor=color;
        document.querySelector('#g32').style.backgroundColor=color;
        document.querySelector('#g33').style.backgroundColor=color;
        document.querySelector('#g34').style.backgroundColor=color;
        document.querySelector('#g35').style.backgroundColor=color;
        document.querySelector('#g36').style.backgroundColor=color;
        //    console.log( document.querySelector('.x').textContent);//style.color=color;



}
colinput.addEventListener('input',fun_color);



//console.log(cellDivs.classList);

//console.log(handleCellClick(e));



         // console.log(xSymbol.style.color='red' );//style.color=color;



//***************************************************** x o colors
let colinputx =document.querySelector('#colorx');
let hexinputx =document.querySelector('#hexx'); 
function xo_color() {
    let color=colinputx.value;
    hexinputx.value=color;
       document.querySelector('#g1').style.color=color;
       document.querySelector('#g2').style.color=color;
         document.querySelector('#g3').style.color=color;
        document.querySelector('#g4').style.color=color;
        document.querySelector('#g5').style.color=color;
        document.querySelector('#g6').style.color=color;
        document.querySelector('#g7').style.color=color;
        document.querySelector('#g8').style.color=color;
        document.querySelector('#g9').style.color=color;
        document.querySelector('#g10').style.color=color;
        document.querySelector('#g11').style.color=color;
        document.querySelector('#g12').style.color=color;
        document.querySelector('#g13').style.color=color;
        document.querySelector('#g14').style.color=color;
        document.querySelector('#g15').style.color=color;
        document.querySelector('#g16').style.color=color;
        document.querySelector('#g17').style.color=color;
        document.querySelector('#g18').style.color=color;
        document.querySelector('#g19').style.color=color;
        document.querySelector('#g20').style.color=color;
        document.querySelector('#g21').style.color=color;
        document.querySelector('#g22').style.color=color;
        document.querySelector('#g23').style.color=color;
        document.querySelector('#g24').style.color=color;
        document.querySelector('#g25').style.color=color;
        document.querySelector('#g26').style.color=color;
        document.querySelector('#g27').style.color=color;
        document.querySelector('#g28').style.color=color;
        document.querySelector('#g29').style.color=color;
        document.querySelector('#g30').style.color=color;
        document.querySelector('#g31').style.color=color;
        document.querySelector('#g32').style.color=color;
        document.querySelector('#g33').style.color=color;
        document.querySelector('#g34').style.color=color;
        document.querySelector('#g35').style.color=color;
        document.querySelector('#g36').style.color=color;
}
 colinputx.addEventListener('input',xo_color);

















