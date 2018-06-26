class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfRows = numberOfRows;
    this._numberOfColumns = numberOfColumns;
    this._numberOfBombs = numberOfBombs;
    this._board = new Board(numberOfRows,numberOfColumns, numberOfBombs)
  }

  playMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex)

    if(playerBoard[rowIndex][columnIndex] =='B'){
      console.log("Game Over!")
      this._board.print()
    } else if (.hasSafeTiles){

    }
  }
}




let playerBoard = generatePlayerBoard(3,4)
let bombBoard = generateBombBoard(3,4,5)

console.log("Player board: ")
printBoard(playerBoard)

console.log("bomb board:")
printBoard(bombBoard)

flipTile(playerBoard, bombBoard,0,0)
console.log("Updated Player board: ")
printBoard(playerBoard)







class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
      this._numberOfRows = numberOfRows;
      this._numberOfColumns = numberOfColumns;
      this._numberOfBombs = numberOfBombs;
      this._numberOfTiles = numberOfRows * numberOfColumns;
      this._playerBoard = generatePlayerBoard(numberOfRows, numberOfColumns);
      this._bombBoard = generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard(){
      return this._playerBoard
    }

    flipTile() {
        if(playerBoard[this._rowIndex][this._columnIndex] != '') {
          console.log('This tile has already been flipped')
          return
        } else if(playerBoard[this._rowIndex][this._columnIndex] == 'B') {
           playerBoard[this._rowIndex][this._columnIndex] == 'B'
        } else {
          playerBoard[this._rowIndex][this._columnIndex] = this.getNumberOfNeighborBombs(this._rowIndex,this._columnIndex)
        }
        numberOfTiles--;
    }

    
    getNumberOfNeighborBombs(rowIndex, columnIndex) {

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
      const numberOfRows = this._bombBoard.length
      const numberOfColumns = this._bombBoard[0].length
      let numberOfBombs = 0

      neighborOffsets.forEach(offset =>{
        const neighborRowIndex = rowIndex + offset[0]
        const neighborColumnIndex = columnIndex + offset[1]

        if (neighborRowIndex>= 0 && 
            neighborRowIndex < neighborRows && 
            neighborColumnIndex >= 0 && 
            neighborColumnIndex < neighborColumns){

            if(this._bombBoard[neighborRowIndex][offset] == 'B'){
              numberOfBombs++
            }
        }
      })

      hasSafeTiles(){
       return ? this._numberOfTiles !+= this._numberOfBombs 
      }
      print() {
        console.log(board.map(row => row.join(' | ')).join('\n'))
      }

      static generatePlayerBoard(numberOfRows, numberOfColumns){ 
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


      static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) { 
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
            if (board[randomRowIndex][randomColumnIndex] !== "B") {
              board[randomRowIndex][randomColumnIndex] = "B";
              numberOfBombsPlaced++;
            }
          }
          return board;
        }


      return numberOfBombs

}


