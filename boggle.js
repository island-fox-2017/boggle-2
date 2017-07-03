class Boggle{
  constructor(square){
    this._square = square;
    // this._fs = require('fs');
    this._dictionary = //this._fs.readFileSync('data.js', 'utf8');
    ['TIME', 'TOP', 'TRY', 'WHORE']
    this._boggle= //this.boggle();
    [['T', 'I', 'M', 'D'],
    ['W', 'O', 'P', 'E'],
    ['H', 'O', 'R', 'U'],
    ['Y', 'R', 'T', 'E']]
    this._pass=this.pass();
  }

  boggle(){
    let papan = []
    let letterBoggle = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    for (let row = 0; row < 4; row++){
      
      if(row == 0){
        let col = []
        for(let i = 0; i < 4; i ++){
          let arrCol = Math.floor(Math.random() * 26)
          col.push(letterBoggle[arrCol])
        }
        papan.push(col)
      }
      
      else if(row == 1){
        let col1 = []
        for(let i = 0; i < 4; i++){
          let arrCol1 = Math.floor(Math.random() * 26)
          col1.push(letterBoggle[arrCol1])
        }
        papan.push(col1)
      }
      
      else if(row == 2){
        let col2 = []
        for(let i = 0; i < 4; i++){
          let arrCol2 = Math.floor(Math.random() * 26)
          col2.push(letterBoggle[arrCol2])
        }
        papan.push(col2)
      }
      
      else if(row == 3){
        let col3 = []
        for(let i = 0; i < 4; i++){
          let arrCol3 = Math.floor(Math.random() * 26)
          col3.push(letterBoggle[arrCol3])
        }
        papan.push(col3)
      }
      
  }
    return papan

  }  

  pass(){
    let papan=[];

    for(let i=0; i<this._square; i++){
      let arr=[];
      for(let j=0;j<this._square;j++)
      arr.push(false);
      papan.push(arr);
    }
    return papan;
  }

  kata(str)
  {
    for (let i=0; i<this._dictionary.length; i++)
    if (str===this._dictionary[i])
    return true;
    return false;
  }

  cariKataPerIndex(boggle,pass,i,j,str){
    pass[i][j]=true;
    str = str + boggle[i][j];

    if (this.kata(str))
    console.log(str);

    for (let baris=i-1; baris<=i+1 && baris<this._square; baris++)
    {
      for (let kol=j-1; kol<=j+1 && kol<this._square; kol++){
        if (baris>=0 && kol>=0 && !pass[baris][kol])
        this.cariKataPerIndex(boggle,pass, baris, kol, str);
      }
    }
    str="";
    pass[i][j] = false;
  }

  cariKata(boggle,pass){
    let i,j;
    let str = "";
    for (i=0; i<this._square; i++)
    for (j=0; j<this._square; j++)
    this.cariKataPerIndex(boggle, pass, i, j, str);

  }
}

let game = new Boggle(4);
console.log(game._boggle)
// console.log(game._dictionary);
game.cariKata(game._boggle,game._pass);
