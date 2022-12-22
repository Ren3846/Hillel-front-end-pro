const string = 'london is the capital of great britain its political economic and cultural centre';

function findLongestWord(str) {
  if (typeof str === 'string') {
    let arrStr = str.split(' ');
    let longestWord = '';

    for (i = 0; i < arrStr.length; i++) {
      if (arrStr[i].length > longestWord.length) {
        longestWord = arrStr[i];
      }
    }

    return longestWord;
  } else {
    console.log('Not a string..');
    return '';
  }
}

console.log(findLongestWord(string));
