"use strict"
//const dictionary = require('./data.js')
const fs = require('fs');
const dictionary = fs.readFileSync('data.txt', 'utf8').toUpperCase().split('\n')

class Boggle {
  constructor() {
    this.dictionary = dictionary;
    this.board = this.shake(2);
  }

  shake(num) {
    let board = [];
    for (let i = 0; i < num; i++) {
      board[i] = [];
      for (let j = 0; j < num; j++) {
        board[i][j] = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
      }
    }
    console.log(board);
    return board;
  }

  solve() {
    let boggleBoard = this.board;
    let solved = [];
    for (let i = 0; i < this.dictionary.length; i++) {
      let dictionaryWord = this.dictionary[i];
      let index = this.firstLetter(dictionaryWord, boggleBoard);
      if (index.length > 0) {
        let slicedWord = dictionaryWord.slice(1);
        for (let i = 0; i < index.length; i++) {
          this.check(solved, slicedWord, dictionaryWord, index[i], [index[i]], boggleBoard);
        }
      }
    }
    console.log("Words That Matched Our Dictionary:");
    for (let i = 0; i < solved.length; i++) {
      console.log(solved[i]);
    }
  }

  firstLetter(word, boggleBoard) {
    let index = [];
    for (let i = 0; i < boggleBoard.length; i++) {
      for (let j = 0; j < boggleBoard.length; j++) {
        if (boggleBoard[i][j] == word[0]) index.push([i, j])
      }
    }
    return index;
  }

  check(solved, slicedWord, word, current, nextMove, boggleBoard) {
    if (slicedWord.length == 0) {
      solved.push(word);
      return solved;
    }
    let surroundIndex = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 0],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    for (let i = 0; i < surroundIndex.length; i++) {
      let row = current[0] + surroundIndex[i][0];
      let collumn = current[1] + surroundIndex[i][1];
      if (0 <= row && row < boggleBoard.length && 0 <= collumn && collumn < boggleBoard.length) {
        if (this.clearMove([row, collumn], nextMove)) {
          if (boggleBoard[row][collumn] == slicedWord[0]) {
            let nextCurrent = [row, collumn];
            let nextSlicedWord = slicedWord.slice(1);
            if (nextSlicedWord.length == 0) {
              solved.push(word);
              return solved;
            } else {
              nextMove.push(nextCurrent);
              return this.check(solved, nextSlicedWord, word, nextCurrent, nextMove, boggleBoard)
            }
          }
        }
      }
    }
  }

  clearMove(pastMove, nextMove) {
    for (let i = 0; i < nextMove.length; i++) {
      if (pastMove[0] == nextMove[i][0] && pastMove[1] == nextMove[i][1]) {
        return false;
      }
    }
    return true;
  }
}

let boggle = new Boggle();
boggle.solve();
