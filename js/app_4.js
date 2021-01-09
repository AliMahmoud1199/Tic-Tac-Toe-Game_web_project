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
  const topMiddle = cellDivs[1].classList[1];
  const topRight = cellDivs[2].classList[1];
  const toplast = cellDivs[3].classList[1];

  const middleLeft = cellDivs[4].classList[1];
  const middleMiddle = cellDivs[5].classList[1];
  const middleRight = cellDivs[6].classList[1];
  const middleLast = cellDivs[7].classList[1];
    
  const middleLeft2 = cellDivs[8].classList[1];
  const middleMiddle2 = cellDivs[9].classList[1];
  const middleRight2 = cellDivs[10].classList[1];
  const middleLast2 = cellDivs[11].classList[1];
    
  const bottomLeft = cellDivs[12].classList[1];
  const bottomMiddle = cellDivs[13].classList[1];
  const bottomRight = cellDivs[14].classList[1];
  const bottomlast = cellDivs[15].classList[1];


  // check winner
  if (topLeft && topLeft === topMiddle && topLeft === topRight && topRight === toplast) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[1].classList.add('won');
    cellDivs[2].classList.add('won');
    cellDivs[3].classList.add('won');

  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight && middleRight === middleLast) {
    handleWin(middleLeft);
    cellDivs[4].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[7].classList.add('won');

  } else if (middleLeft2 && middleLeft2 === middleMiddle2 && middleLeft2 === middleRight2 && middleRight2 === middleLast2) {
    handleWin(middleLeft);
    cellDivs[8].classList.add('won');
    cellDivs[9].classList.add('won');
    cellDivs[10].classList.add('won');
    cellDivs[11].classList.add('won');
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight && bottomRight === bottomlast) {
    handleWin(bottomLeft);
    cellDivs[12].classList.add('won');
    cellDivs[13].classList.add('won');
    cellDivs[14].classList.add('won');
    cellDivs[15].classList.add('won');//****************************************************

  } else if (topLeft && topLeft === middleLeft &&topLeft === middleLeft2 && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[4].classList.add('won');
    cellDivs[8].classList.add('won');
    cellDivs[12].classList.add('won');

  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === middleMiddle2 && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[9].classList.add('won');
    cellDivs[13].classList.add('won');

  } else if (topRight && topRight === middleRight && topRight === middleRight2 && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[10].classList.add('won');
    cellDivs[14].classList.add('won');

  } else if (toplast && toplast === middleLast && toplast === middleLast2 && toplast === bottomlast) {
    handleWin(topMiddle);
    cellDivs[3].classList.add('won');
    cellDivs[7].classList.add('won');
    cellDivs[11].classList.add('won');
    cellDivs[15].classList.add('won');//***********************************************
  } else if (topLeft && topLeft === middleMiddle && topLeft === middleRight2 && topLeft === bottomlast) {
    handleWin(topLeft);
    cellDivs[0].classList.add('won');
    cellDivs[5].classList.add('won');
    cellDivs[10].classList.add('won');
    cellDivs[15].classList.add('won');

  } else if (toplast && toplast === middleRight && toplast === middleMiddle2 && toplast === bottomLeft) {
    handleWin(topRight);
    cellDivs[3].classList.add('won');
    cellDivs[6].classList.add('won');
    cellDivs[9].classList.add('won');
    cellDivs[12].classList.add('won');

  } else if (topLeft && topMiddle && topRight && toplast && middleLeft && middleMiddle && middleRight&& middleLast && middleLeft2 && middleRight2 && middleMiddle2 && middleLast2 && bottomLeft && bottomMiddle && bottomRight&&bottomlast) {
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
        //    console.log( document.querySelector('.x').textContent);//style.color=color;



}
colinput.addEventListener('input',fun_color);



//console.log(cellDivs.classList);

//console.log(handleCellClick(e));



         // console.log(xSymbol.style.color='red' );//style.color=color;





















