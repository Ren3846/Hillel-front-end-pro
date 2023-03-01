// посчитать сумму чисел от 0 до n через рекурсию
// sumTo(n)
function sumTo(n) {
	if (n === 0) {
		return 0;
	}
	return n + sumTo(n -1);
}

console.log(sumTo(4));
// return 4 + sumTo(4 - 1);
// 4 + return 3 + sumTo(3 - 1);
// 4 + 3 + return 2 + sumTo(2 - 1);
// 4 + 3 + + 2 return 1 + sumTo(1 - 1);
// 4 + 3 + + 2  + 1 return 0;
// 4 + 3 + + 2  + 1 + 0;




