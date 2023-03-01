// посчитать сумму четных чисел от 0 до n через рекурсию
// sumTo(n)
function sumTo(n) {
	if (n === 0) {
		return 0;
	}
	if (n % 2 === 0) {
		return n + sumTo(n -1);
	} else {
		return sumTo(n -1);
	}

}
console.log(sumTo(5));


