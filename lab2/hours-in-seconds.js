const hoursQuantity = prompt('Введіть кількість годин');
const hours = parseInt(hoursQuantity);

const secInHours = hours * 3600;
alert(`У ${hoursQuantity} годинах ${secInHours} секунд`);
