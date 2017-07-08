const data = require('./data2');
class Boogle2 {
  constructor(scale){
    this.scale = scale;
    this.board = []
    this.boogleLib = []
    this.findWord = []
    this.aZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  shakeABC(){
      let x = Math.floor(Math.random()*26)
      return this.aZ.charAt(x)
  }
  makeBoard(){
    var x = this.scale
    if(x > 2) {
      for(let i = 0; i < x; i++){
        let rowBoard = []
        for(let j = 0; j < x; j++){
          let shake = this.shakeABC()
          rowBoard.push(shake)
        }
        this.board.push(rowBoard)
      }
      return this.board

    } else {
      return 'Ukuran Board Minimum 3 x 3'
    }
  }

  makeLibrary(){
    let searchBoard = this.makeBoard();
    let libArr = [];
    //left right direction
    for(let i = 0; i < this.scale; i++){
      this.boogleLib.push(searchBoard[i].join(''));
      this.boogleLib.push(searchBoard[i].reverse().join(''));
    }

    //up down direction
    for(let i = 0; i <this.scale; i++){
      let updownArr = [];
      for(let j = 0; j < this.scale; j++){
        let updown = searchBoard[j][i]
        // console.log(updown);
        updownArr.push(updown);
      }
      this.boogleLib.push(updownArr.join(''));
      this.boogleLib.push(updownArr.reverse().join(''));
    }
    return this.boogleLib;
  }

  findWords(){
    //perulangan berdasarkan length data di library dan length data di data.js
    // i for boogleLib and j for data.js
    for(let i = 0; i < this.boogleLib.length; i++){

      for(let j = 0; j < data.length; j++){

        let wordsasPattern = data[j]
        var regex = new RegExp(wordsasPattern)
        var libPattern = this.boogleLib[i]
        if(regex.test(libPattern) === true){
          this.findWord.push(data[j]);
          // console.log(j);
          // console.log(data[j]);
        }
        // return libPattern
      }
    }
    return this.findWord
  }

}

let play = new Boogle2(15);
// play.findWords();
console.log('==================================================================================');
console.log('============================= ---   BOGGLE BOARD   --- ===========================');

console.log(play.makeBoard());
play.makeLibrary();
console.log('==================================================================================');
console.log(`Kata dalam kamus yang ditemukan :\n ${play.findWords()}`);
console.log('==================================================================================');
console.log(`Banyak Kata dalam Kamus : ${data.length}`);
console.log('==================================================================================');
