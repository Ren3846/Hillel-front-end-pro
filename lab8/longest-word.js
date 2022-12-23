const string = 'london is the capital of great britain its political economic and cultural centre';

function findLongestWord(str) {
  if (typeof str === 'string') {
    const arrStr = str.split(' ');
    let longestWord = arrStr[0];

    for (i = 1; i < arrStr.length; i++) {
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
