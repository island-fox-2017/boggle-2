//coding game ini belum selesai untuk mecari pola mendapatkan huruf2 berikutnya

class BoggleBoard {
  constructor() {
    this.board = this.shake()
    this.AtoZ = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // this.firstLetterIndex
  }

  shake() {
    var boardFix = [['Q', 'V', 'C', 'R'],
                    ['F', 'A', 'K', 'E'],
                    ['W', 'X', 'W', 'N'],
                    ['T', 'I', 'G', 'H']]
    // for (var i=0; i<Math.pow(4, 2); i++) {
    //     this.board.push(this.randomLetter())
    //   }
    // return this.board;
    // if(num>1) {
    //   for (var i=0; i<num; i++) {
    //     this.board.push([])
    //     for (var j=0; j<num; j++) {
    //       this.board[i].push(this.randomLetter());
    //     }
    //   }
      // return this.board;
    // }
    // else {return 'Papan permainan minimal 2x2'}
    return boardFix;
  }

  randomLetter() {
    let index = Math.floor(Math.random()*this.AtoZ.length);
    let huruf = this.AtoZ.charAt(index);
    return huruf
  }

  // checkWord(string) {
  //   let newArr = '';
  //   for(var i=0; i<string.length; i++) {
  //     if(string.charAt(i) === this.board) {
  //       newArr += string.charAt(i);
  //       console.log(this.board[i]);
  //       // console.log(newArr)
  //       // for(var j=0; j<this.board.length; j++) {
  //       //   for(var k=0; k<this.board.length; k++)
  //       // }
  //
  //     }
  //     return ;
  //   }
  //   // return false;
  // }

  //mencari index huruf pertama yg ada di board
  findFirstLetterIndex(string) {
    let indexFirst = [];
    for (var i=0; i<this.board.length; i++) {
      for(var j=0; j<this.board.length; j++) {
        if (string.charAt(0) === this.board[i][j]) {
          indexFirst.push(i, j);
          break
        }
      }
    }
    return indexFirst.slice(0,2);
  }

  //mencari huruf berikutnya dengan mencek array2 disebelahnya dimulai dari index yg diperoleh
  //dari method findFirstLetterIndex()
  cekTetangga(string) {
    let indexStart = this.findFirstLetterIndex(string);
    let cek = String(this.findFirstLetterIndex(string));
    let index_1 = String([0, 0]);
    let index_2 = String([0, 1]);
    let index_3 = String([0, 2]);
    let index_4 = String([0, 3]);
    let index_5 = String([1, 0]);
    let index_6 = String([1, 1])
    let index_7 = String([1, 2])
    let index_8 = String([1, 3])
    let index_9 = String([2, 0])
    let index_10 = String([2, 1])
    let index_11 = String([2, 2])
    let index_12 = String([2, 3])
    let index_13 = String([3, 0])
    let index_14 = String([3, 1])
    let index_15 = String([3, 2])
    let index_16 = String([3, 3])
    let temp = [];
    for (var i = 0; i < this.board.length; i++) {
      for (var j = 0; j < this.board.length; j++) {
        debugger
        if (cek == index_1) {
          return 'index [0,0]'
        }
        else if (cek == index_2 || cek == index_3) {
          for (var k = 1; k < string.length; k++) {
            if(this.board[indexStart[0]][indexStart[1]+1] == string.charAt(1)){
              temp.push(this.board[indexStart[0]][indexStart[1]+1]);
              console.log('ini: '+this.board[indexStart[0]][indexStart[1]+1])
              break
            }
          }
          // return 'index [0,1] atau [0,2]';
          // return this.board[indexStart[0]][indexStart[1]+1];
          return temp;
        }
        else if (cek == index_4) {
          return 'index [0,3]';
        }
        else if (cek == index_5 || cek == index_9) {
          return 'index [1,0] atau [2,0]' ;
        }
        else if (cek == index_6 || cek == index_7 || cek == index_10 || cek == index_11) {
          return 'index [1,1] atau [1,2] atau [2,1] atau [2,2]' ;
        }
        else if (cek == index_8 || cek == index_12) {
          return 'index [1,3] atau [2,3]' ;
        }
        else if (cek == index_13) {
          return 'index [3,0]';
        }
        else if (cek == index_14 || cek == index_15) {
          return 'index [3,1] atau [3,2]';
        }
        if (cek == index_16) {
          return 'index [3,3]'
        }
        else{return 'Kata yang dicari tidak ditemukan di board ini'}
      }
    }
    // return cek;
  }

}

let newGame =  new BoggleBoard()
// console.log(newGame.randomLetter())
var word = 'CREW'
console.log(`Game Boggle 4x4 to find word '${word}'`);
console.log('--------------------------------------');
console.log(newGame.shake())
console.log(newGame.findFirstLetterIndex(word))
console.log(newGame.cekTetangga(word));
// console.log(newGame.getNextLetter(word))
// console.log(newGame.board)































//ascii A-Z 65-90


// getNextLetter(string) {
//   let getNext= '';
//   var upLeft = i-5;
//   var up = i-4;
//   var upRight = i-3;
//   var bottomLeft = i+3;
//   var bottom = i+4;
//   var bottomRight = i+5;
//   var right = i+1;
//   var left = i-1;
//
//   for (var i = this.findFirstLetterIndex(string); i < this.board.length; i++) {
//     if(this.board[i+1]==string.charAt(1)) {
//       getNext += this.board[i+1];
//       break
//     }
//     else{return 'huruf ke-2 ga nemu'}
//   }
//   return getNext;
//   // getFirst.push(this.board[this.checkFirstLetterIndex()]);
// }
