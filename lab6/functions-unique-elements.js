const firstArr = ['Lviv', 'Dnipro', 'Ternopil', 'London'];
const secondArr = ['Dnipro', 'Paris', 'York', 'Ternopil'];

function getUniqueElems(arr1, arr2) {
  let uniqArr = [];
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    const generalArr = arr1.concat(arr2);
    generalArr.sort();
    let n = generalArr.length;
    for (let i = 1, j = 0, t; i < n + 1; i++) {
      if (generalArr[i - 1] === generalArr[i]) t = generalArr[i - 1];
      if (generalArr[i - 1] !== t) uniqArr[j++] = generalArr[i - 1];
    }
    return uniqArr;
  } else return console.log('Ops..', uniqArr);
}

const res = getUniqueElems(firstArr, secondArr);
