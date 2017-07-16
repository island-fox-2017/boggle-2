'use strict'

const fs = require('fs');

class Boggle {
  constructor(size, file) {
    // this._board = this.board(size);
    // this.dictionary = file.split('","')
    this._size = size;
    this._passed = this.passed();

    // tester
    this._board = [
      ['P','H','I','W'],
      ['E','K','I','P'],
      ['J','Z','M','B'],
      ['A','B','D','G']
    ];
    this.dictionary = ['KIWI', 'PIZA', 'JAZ', 'MIHI', 'BIHI'];
  }

  board(size) {
    let matrix = [];

    for (var i = 0; i < size; i++) {
      let row = [];
      for (var j = 0; j < size; j++) {
        let rand = Math.ceil(Math.random()*26);
        row.push(String.fromCharCode(64 + rand));
      }
      matrix.push(row);
    }

    return matrix;
  }

  passed() {
    let checker = [];

    for (var i = 0; i <= this._size - 1; i++) {
      let arr = [];
      for (var j = 0; j <= this._size - 1; j++) arr.push(false);
      checker.push(arr);
    }
    return checker;
  }

  word(str) {
    for (var i = 0; i <= this.dictionary.length - 1; i++) {
      if (str === this.dictionary[i]) return true;
    }
    return false;
  }

  searchWord(board, passed, i, j, str) {
    passed[i][j] = true;
    str = str + board[i][j];

    if (this.word(str)) console.log(str);

    for (var row = i - 1; row <= i + 1 && row < this._size; row++) {
      for (var col = j - 1; col <= j + 1 && col < this._size; col++) {
        if (row >= 0 && col >= 0 && !passed[row][col])
          this.searchWord(board, passed, row, col, str);
      }
    }

    str = '';
    passed[i][j] = false;
  }

  findWord(board, passed) {
    let str = "";
    for (var i = 0; i <= this._size - 1; i++)
      for (var j = 0; j <= this._size - 1; j++)
        this.searchWord(board, passed, i, j, str);
  }

  printBoard() {
    let arr = this._board;
    let boggleString = '';

    for (var i = 0; i <= arr.length - 1; i++) {
      for (var j = 0; j <= arr.length - 1; j++) {
        if (j === arr.length - 1) {
          boggleString += `|  ${arr[i][j]}  |`;
        } else {
          boggleString += `|  ${arr[i][j]}  `;
        }
      }
      boggleString += '\n';
    }

    return boggleString;
  }

  solve() {
    console.log(this.printBoard(this._board));;
    this.findWord(this._board, this._passed);
  }
} // end of Boggle

let file = fs.readFileSync('data.js', 'utf8')
let game = new Boggle(4, file);
// console.log(game.dictionary);
// console.log(game._board);

// console.log(game.printBoard(game._board));
// game.findWord(game._board, game._passed);

game.solve();

/*
[['P','H','I','W'],
 ['E','K','I','P'],
 ['J','Z','M','B'],
 ['A','B','D','G']]
*/