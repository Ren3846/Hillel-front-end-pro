const operation = prompt('Що ви хоче зробити? (add, sub, mult, div)');
const firstNum = Number(prompt('Введіть перше число'));
const secondNum = Number(prompt('Введіть друге число'));

switch (operation) {
  case 'add':
    const resAdd = firstNum + secondNum;
    alert(`${firstNum} + ${secondNum} = ${resAdd}`);
    break;
  case 'sub':
    const resSub = firstNum - secondNum;
    alert(`${firstNum} - ${secondNum} = ${resSub}`);
    break;
  case 'mult':
    const resMult = firstNum * secondNum;
    alert(`${firstNum} * ${secondNum} = ${resMult}`);
    break;
  case 'div':
    const resDiv = firstNum / secondNum;
    alert(`${firstNum} / ${secondNum} = ${resDiv}`);
    break;
  default:
    alert('Щось пішло не так..(');
}
