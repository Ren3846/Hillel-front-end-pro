const firstNum = +prompt('Перше число');
const secondNum = +prompt('Друге число');

const sum = firstNum + secondNum;
const dif = firstNum - secondNum;
const mul = firstNum * secondNum;
const div = firstNum / secondNum;

alert(`Сума: ${firstNum} + ${secondNum} = ${sum},
Різниця: ${firstNum} - ${secondNum} = ${dif},
Добуток: ${firstNum} * ${secondNum} = ${mul},
Ділення: ${firstNum} / ${secondNum} = ${div}.
`);
