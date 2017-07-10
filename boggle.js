"use strict"
const fs = require('fs');
const kamusData = fs.readFileSync('data.txt', 'utf8').toUpperCase().split('\n')

class Boggle {
  constructor() {
    this.kamusData = kamusData;
    this.papan = this.shake(4);
  }

  shake(num) {
    let papannya = [];
    let abjad = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for (let i = 0; i < num; i++) {
      papannya[i] = [];
      for (let j = 0; j < num; j++) {
        papannya[i][j] =  abjad[Math.floor(Math.random()*26)];
      }
    }
    console.log(papannya);
    return papannya;
  }

  solve() {
    let papanBoggle = this.papan;
    let ditemukan = [];
    for (let i = 0; i < this.kamusData.length; i++) {
      let kamusPerKata = this.kamusData[i];
      let index = this.hurufPertama(kamusPerKata, papanBoggle);
      if (index.length > 0) {
        let potongKata = kamusPerKata.slice(1);
        for (let i = 0; i < index.length; i++) {
          this.checking(ditemukan, potongKata, kamusPerKata, index[i], [index[i]], papanBoggle);
        }
      }
    }

    console.log("Kata yang ditemukan adalah:");
    for (let i = 0; i < ditemukan.length; i++) {
      console.log(ditemukan[i]);
    }
  }

  hurufPertama(kata, papanBoggle) {
    let index = [];
    for (let i = 0; i < papanBoggle.length; i++) {
      for (let j = 0; j < papanBoggle.length; j++) {
        if (papanBoggle[i][j] == kata[0]) index.push([i, j])
      }
    }
    return index;
  }

  langkahTanpaKasusKhusus(langkahSebelumnya, langkahSelanjutnya) {
    for (let i = 0; i < langkahSelanjutnya.length; i++) {
      if (langkahSebelumnya[0] == langkahSelanjutnya[i][0] && langkahSebelumnya[1] == langkahSelanjutnya[i][1]) {
        return false;
      }
    }
    return true;
  }

  checking(ditemukan, potongKata, kata, posisiSekarang, langkahSelanjutnya, papanBoggle) {
    if (potongKata.length == 0) {
      ditemukan.push(kata);
      return ditemukan;
    }
    let kasusKhusus = [
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
    for (let i = 0; i < kasusKhusus.length; i++) {
      let baris = posisiSekarang[0] + kasusKhusus[i][0];
      let kolom = posisiSekarang[1] + kasusKhusus[i][1];
      if (0 <= baris && baris < papanBoggle.length && 0 <= kolom && kolom < papanBoggle.length) {
        if (this.langkahTanpaKasusKhusus([baris, kolom], langkahSelanjutnya)) {
          if (papanBoggle[baris][kolom] == potongKata[0]) {
            let posisiSelanjutnya = [baris, kolom];
            let potongKataBerikutnya = potongKata.slice(1);
            if (potongKataBerikutnya.length == 0) {
              ditemukan.push(kata);
              return ditemukan;
            } else {
              langkahSelanjutnya.push(posisiSelanjutnya);
              return this.checking(ditemukan, potongKataBerikutnya, kata, posisiSelanjutnya, langkahSelanjutnya, papanBoggle)
            }
          }
        }
      }
    }
  }
}

let boggle = new Boggle();
boggle.solve();
