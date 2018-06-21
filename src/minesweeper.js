const generatePlayerBoard = (numberOfRows, numberOfColumns) => { 
  let board = []

  for (let r=0; r < numberOfRows; r++){
    let row = []

    for (let c=0; c < numberOfColumns; c++) {
      row.push(' ')
    }
    board.push(row)
  }
  return board
}


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => { 
  let board = []

  for (let r=0; r < numberOfRows; r++){
    let row = []

    for (let c=0; c < numberOfColumns; c++) {
      row.push(null)
    }
    board.push(row)
  }

  let numberOfBombsPlaced = 0

  while (numberOfBombsPlaced < numberOfBombs){
    let randomRowIndex = Math.floor(Math.random(numberOfRows))
    let randomColumnIndex = Math.floor(Math.random(numberOfColumns))

    board[randomRowIndex][randomColumnIndex] = "B"

    numberOfBombsPlaced++
  }
  return board;
}



console.log("player board " + generatePlayerBoard(5,5))


console.log("bomb board " + generateBombBoard(5,5,2))








//  PART 2
// const printBoard = (board) => {
//   console.log('Current Board:')
//   console.log(board[0].join('|'))
//   console.log(board[1].join('|'))
//   console.log(board[2].join('|'))

// }

// let board = [
//               [' ',' ',' '],
//               [' ',' ',' '],
//               [' ',' ',' ']
//             ];

// printBoard(board)

// board[0][1] = '1'
// board[2][2] = 'B'

// printBoard(board)
