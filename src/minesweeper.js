const generatePlayerBoard = (numberOfRows, numberOfColumns) => { 
  let board = []

  for (let rowIndex=0; rowIndex < numberOfRows; rowIndex++){
    let row = []

    for (let columnIndex=0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(' ')
    }
    board.push(row)
  }
  return board
}


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => { 
  let board = []

  for (let rowIndex=0; rowIndex < numberOfRows; rowIndex++){
    let row = []

    for (let columnIndex=0; columnIndex < numberOfColumns; columnIndex++) {
      row.push(null)
    }
    board.push(row)
  }

  let numberOfBombsPlaced = 0

  while (numberOfBombsPlaced < numberOfBombs){
    let randomRowIndex = Math.floor(Math.random() * numberOfRows)
    let randomColumnIndex = Math.floor(Math.random() * numberOfColumns)
    if (board[randomRowIndex][randomColumnIndex] != "B") {
      board[randomRowIndex][randomColumnIndex] = "B";
      numberOfBombsPlaced++;
    }
  }
  return board;
}

const getNumberOfNeighboBombs = (bombBoard, rowIndex, columnIndex) => {
  const neighborOffsets = [ 
    [-1,-1],
    [-1,0],
    [-1,1],
    [0,-1],
    [0,0],
    [0,1],
    [1,-1],
    [1,1]
  ]
  const numberOfRows = bombBoard.length
  const numberOfColumns = bombBoard[0].length
  let numberOfBombs = 0

  neighborOffsets.forEach(offset =>{
    const neighborRowIndex = rowIndex + offset
    const neighborColumnIndex = columnIndex + offset

    if (neighborRowIndex>= 0 && neighborRowIndex !>){

    }
  })
}

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'))

}





let playerBoard = generatePlayerBoard(3,4)
let bombBoard = generateBombBoard(3,4,5)

console.log("Player board: ")
printBoard(playerBoard)

console.log("bomb board:")
printBoard(bombBoard)

