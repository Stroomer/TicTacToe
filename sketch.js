const cellWidth = 300;
const cellHeight = 300;

let cell1Color = 'white';
let cell2Color = 'white';
let cell3Color = 'white';
let cell4Color = 'white';
let cell5Color = 'white';
let cell6Color = 'white';
let cell7Color = 'white';
let cell8Color = 'white';
let cell9Color = 'white';

let player1 = 'red';
let player2 = 'blue';
let playerTurn = player1;

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(220);
  // Controleer of de muis boven het eerste vakje zweeft
  if (mouseX > 0 && mouseX < cellWidth && mouseY > 0 && mouseY < cellHeight) {
    // Controleer of het huidige vakje wit is (want alleen dan mogen we klikken)
    if (cell1Color == 'white') {
      cell1Color = playerTurn;
    }
  }

  strokeWeight(4);

  fill(cell1Color);
  rect(0 * cellWidth, 0 * cellHeight, cellWidth, cellHeight);

  fill(cell2Color);
  rect(1 * cellWidth, 0 * cellHeight, cellWidth, cellHeight);

  fill(cell3Color);
  rect(2 * cellWidth, 0 * cellHeight, cellWidth, cellHeight);

  fill(cell4Color);
  rect(0 * cellWidth, 1 * cellHeight, cellWidth, cellHeight);

  fill(cell5Color);
  rect(1 * cellWidth, 1 * cellHeight, cellWidth, cellHeight);

  fill(cell6Color);
  rect(2 * cellWidth, 1 * cellHeight, cellWidth, cellHeight);

  fill(cell7Color);
  rect(0 * cellWidth, 2 * cellHeight, cellWidth, cellHeight);

  fill(cell8Color);
  rect(1 * cellWidth, 2 * cellHeight, cellWidth, cellHeight);

  fill(cell9Color);
  rect(2 * cellWidth, 2 * cellHeight, cellWidth, cellHeight);
}
