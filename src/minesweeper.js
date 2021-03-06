class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows,numberOfColumns, numberOfBombs)
  }

  playMove(rowIndex, columnIndex){
    this._board.flipTile(rowIndex, columnIndex);
    if(this._board.playerBoard[rowIndex][columnIndex] === 'B'){
      console.log("Game Over!")
      this._board.print()
    } else if (!this._board.hasNonBombEmptySpaces()) {
      console.log("You won!")
    } else {
      console.log("Current board:")
      this._board.print();
    }
  }
}

class Board {
    constructor(numberOfRows, numberOfColumns, numberOfBombs){
      this._numberOfBombs = numberOfBombs;
      this._numberOfEmptySpaces = numberOfRows * numberOfColumns;
      // ASK JASON: Why is this being set on Board instead of this?
      this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
      this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
    }

    get playerBoard(){
      return this._playerBoard
    }

    flipTile(rowIndex, columnIndex) {
        if(this._playerBoard[rowIndex][columnIndex] != ' ') {
          return
        } else if(this._bombBoard[rowIndex][columnIndex] === 'B') {
           this._playerBoard[rowIndex][columnIndex] = 'B'
        } else {
          this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(this._rowIndex,this._columnIndex)
        }
        this._numberOfEmptySpaces--;
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

            if(this._bombBoard[neighborRowIndex][neighborColumnIndex] == 'B'){
              numberOfBombs++
            }
        }
      })
    }


      hasNonBombEmptySpaces(){
        return this._numberOfEmptySpaces !== this._numberOfBombs
      }
      // hasSafeTiles() {
      //  return ? this._numberOfTiles !+= this._numberOfBombs 
      // }
      print() {
        console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'))
      }

      static generatePlayerBoard(numberOfRows, numberOfColumns){ 
        // ASK JASON: Why is this const? Shouldnt it be let because we're pusing into it?
        const board = []

        for (let rowIndex=0; rowIndex < numberOfRows; rowIndex++){
          // same question
          const row = []
          for (let columnIndex=0; columnIndex < numberOfColumns; columnIndex++) {
            row.push(' ')
          }
          board.push(row)
        }
        return board
      }


      static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) { 
          const board = []

          for (let rowIndex=0; rowIndex < numberOfRows; rowIndex++){
            const row = []

            for (let columnIndex=0; columnIndex < numberOfColumns; columnIndex++) {
              row.push(null)
            }
            board.push(row)
          }

          let numberOfBombsPlaced = 0

          while (numberOfBombsPlaced < numberOfBombs){
            const randomRowIndex = Math.floor(Math.random() * numberOfRows)
            const randomColumnIndex = Math.floor(Math.random() * numberOfColumns)
            if (board[randomRowIndex][randomColumnIndex] !== "B") {
              board[randomRowIndex][randomColumnIndex] = "B";
              numberOfBombsPlaced++;
            }
          }
          return board;
        }
}


const g =  new Game(3,3,3)
g.playMove(0,0)

