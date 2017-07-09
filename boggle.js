let arr = [['T', 'R', 'U', 'M'], ['X', 'L', 'E', 'P'], ['Z', 'T', 'R', 'P'], ['Y', 'S', 'U', 'N']];
let dictionary = 'TRUMP';

function iterate(arr, dictionary, i = 0, j = 0, currentDictIndex = 0) {
  let endResult = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      endResult +=  search(arr, dictionary, i, j, currentDictIndex);
      endResult += '\n';
    }
  }
  return endResult;
}

function search(arr, dictionary, i = 0, j = 0, currentDictIndex = 0) {
  debugger;
  if (arr[i][j] == dictionary[currentDictIndex]) {
    if (currentDictIndex == dictionary.length - 1) {
      return `${dictionary} WAS Found`;
    }

    // Vertical Checking
    if (i != 0) {
      if (arr[i - 1][j] == dictionary[currentDictIndex + 1]) {
        return search(arr, dictionary, i - 1, j, currentDictIndex + 1);
      }
    }
    if (i != arr.length - 1) {
      if (arr[i + 1][j] == dictionary[currentDictIndex + 1]) {
        return search(arr, dictionary, i + 1, j, currentDictIndex + 1);
      }
    }

    // Horizontal Checking
    if (j != 0) {
      if (arr[i][j - 1] == dictionary[currentDictIndex + 1]) {
        return search(arr, dictionary, i, j - 1, currentDictIndex + 1);
      }
    }
    if (j != arr[0].length - 1) {
      if (arr[i][j + 1] == dictionary[currentDictIndex + 1]) {
        return search(arr, dictionary, i, j + 1, currentDictIndex + 1);
      }
    }

    // Diagonal Left Checking
    if (i != 0 && j != 0) {
      if (arr[i][j - 1] == dictionary[currentDictIndex + 1]) {
        return search(arr, dictionary, i - 1, j - 1, currentDictIndex + 1);
      }
    }
    if (i != arr.length - 1  && j != 0) {
      if (arr[i][j + 1] == dictionary[currentDictIndex + 1]) {
        return search(arr, dictionary, i + 1, j - 1, currentDictIndex + 1);
      }
    }

    // Diagonal Right Checking
    if (i != 0 && j != arr[0].length - 1) {
      if (arr[i][j - 1] == dictionary[currentDictIndex + 1]) {
        return search(arr, dictionary, i - 1, j + 1, currentDictIndex + 1);
      }
    }
    if (i != arr.length - 1 && j != arr[0].length - 1) {
      if (arr[i][j + 1] == dictionary[currentDictIndex + 1]) {
        return search(arr, dictionary, i + 1, j + 1, currentDictIndex + 1);
      }
    }
  }
  else {
    return `${dictionary} NOT Found`;
  }
}

let result = iterate(arr, dictionary);
result = result.match(/WAS FOUND/gi);
console.log(`${dictionary} ${result?result[0]:'NOT FOUND'} !`);
