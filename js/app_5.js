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
  const topRight = cellDivs[4].classList[1];
 
  const m1Left = cellDivs[5].classList[1];
  const m1Middle1 = cellDivs[6].classList[1];
  const m1Middle2 = cellDivs[7].classList[1];
  const m1Middle3 = cellDivs[8].classList[1];
  const m1Right = cellDivs[9].classList[1];
     
  const m2Left = cellDivs[10].classList[1];
  const m2Middle1 = cellDivs[11].classList[1];
  const m2Middle2 = cellDivs[12].classList[1];
  const m2Middle3 = cellDivs[13].classList[1];
  const m2Right = cellDivs[14].classList[1];
    
  const m3Left = cellDivs[15].classList[1];
  const m3Middle1 = cellDivs[16].classList[1];
  const m3Middle2 = cellDivs[17].classList[1];
  const m3Middle3 = cellDivs[18].classList[1];
  const m3Right = cellDivs[19].classList[1];

  const bottomLeft = cellDivs[20].classList[1];
  const bottomMiddle1 = cellDivs[21].classList[1];
  const bottomMiddle2 = cellDivs[22].classList[1];
  const bottomMiddle3 = cellDivs[23].classList[1];
  const bottomRight = cellDivs[24].classList[1];
 

  // check winner
  if (topLeft && topLeft === topMiddle1 && topLeft === topMiddle2 && topLeft === topMiddle3 && topMiddle3 === topRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
    cellDivs[3].classList.add('won');
    cellDivs[4].classList.add('won');


  } else if (m1Left && m1Left === m1Middle1 && m1Left === m1Middle2 && m1Left === m1Middle3 && m1Right === m1Middle3) {
    handleWin(m1Left);
    cellDivs[5].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[8].classList.add('won');
    cellDivs[9].classList.add('won');


  } else if (m2Left && m2Left === m2Middle1 && m2Left === m2Middle2 && m2Left === m2Middle3 && m2Middle3 === m2Right) {
    handleWin(m2Left);    
    cellDivs[10].classList.add('won');
    cellDivs[11].classList.add('won');
    cellDivs[12].classList.add('won');
    cellDivs[13].classList.add('won');
    cellDivs[14].classList.add('won');

  } else if (m3Left && m3Left === m3Middle1 && m3Left === m3Middle2 && m3Left === m3Middle3 && m3Middle3 === m3Right) {
    handleWin(m3Left);    
    cellDivs[15].classList.add('won');
    cellDivs[16].classList.add('won');
    cellDivs[17].classList.add('won');
    cellDivs[18].classList.add('won');
    cellDivs[19].classList.add('won');

  } else if (bottomLeft && bottomLeft === bottomMiddle1 && bottomLeft === bottomMiddle2 && bottomLeft === bottomMiddle3 && bottomRight === bottomMiddle3) {
    handleWin(bottomLeft);
    cellDivs[20].classList.add('won');
    cellDivs[21].classList.add('won');
    cellDivs[22].classList.add('won');
    cellDivs[23].classList.add('won');
    cellDivs[24].classList.add('won');//****************************************************finish

  } else if (topLeft && topLeft === m1Left && topLeft === m2Left && topLeft === m3Left  && m3Left === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[10].classList.add('won');
    cellDivs[15].classList.add('won');
    cellDivs[20].classList.add('won');


  } else if (topMiddle1 && topMiddle1 === m1Middle1 && topMiddle1 === m2Middle1 && topMiddle1 === m3Middle1 && m3Middle1 === bottomMiddle1) {
    handleWin(topMiddle1);
    cellDivs[1].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[11].classList.add('won');
    cellDivs[16].classList.add('won');
    cellDivs[21].classList.add('won');


  } else if (topMiddle2 && topMiddle2 === m1Middle2 && topMiddle2 === m2Middle2&&topMiddle2===m3Middle2 && m3Middle2 ===      bottomMiddle2) {
    handleWin(topMiddle2);
    cellDivs[2].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[12].classList.add('won');
    cellDivs[17].classList.add('won');
    cellDivs[22].classList.add('won');


  } else if (topMiddle3 && topMiddle3 === m1Middle3 && topMiddle3 === m2Middle3 && topMiddle3 === m3Middle3 && m3Middle3 ===    bottomMiddle3) {
    handleWin(topMiddle3);
    cellDivs[3].classList.add('won');
    cellDivs[8].classList.add('won');
    cellDivs[13].classList.add('won');
    cellDivs[18].classList.add('won');
    cellDivs[23].classList.add('won');

  } 
    else if (topRight && topRight === m1Right && topRight === m2Right && topRight === m3Right && m3Right === bottomRight) {
    handleWin(topRight);
    cellDivs[4].classList.add('won');
    cellDivs[9].classList.add('won');
    cellDivs[14].classList.add('won');
    cellDivs[19].classList.add('won');
    cellDivs[24].classList.add('won');//***********************************************finish
        
  } else if (topLeft && topLeft === m1Middle1 && topLeft === m2Middle2 && topLeft === m3Middle3 && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[12].classList.add('won');
    cellDivs[18].classList.add('won');
    cellDivs[24].classList.add('won');

  } else if (topRight && topRight === m1Middle3 && topRight === m2Middle2 && topRight === m3Middle1 && m3Middle1 === bottomLeft) {
    handleWin(topRight);
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
    cellDivs[12].classList.add('won');
    cellDivs[16].classList.add('won');
    cellDivs[20].classList.add('won');


  } else if (topLeft && topMiddle1 && topMiddle2 && topMiddle3 && topRight && m1Left && m1Middle1 && m1Middle2 && m1Middle3 && m1Right && m2Left && m2Middle1 && m2Middle2 && m2Middle3 && m2Right && bottomLeft && bottomMiddle1 && bottomMiddle2 && bottomMiddle3 && bottomRight) {
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
	var item=document.querySelectorAll('.game-cell'); //.style.backgroundColor=color;
      		
	for(let x of item)
	{
	x.style.backgroundColor=color;
	}	
}
colinput.addEventListener('input',fun_color);
//***************************************************** x o colors
let colinputx =document.querySelector('#colorx');
let hexinputx =document.querySelector('#hexx'); 
function xo_color() {
    let color=colinputx.value;
    hexinputx.value=color;
   var item=document.querySelectorAll('.game-cell'); //.style.backgroundColor=color;
        
	for(let x of item)
	{
	x.style.color=color;
	}
}
 colinputx.addEventListener('input',xo_color);


















