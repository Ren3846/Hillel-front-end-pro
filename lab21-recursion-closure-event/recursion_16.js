// Цифры числа слева направо через рекурсию
// f(179) -> 1 7 9

function f(n) {
	if(n / 10 > 1) {
		return f(Math.floor(n / 10)) + " " + n % 10;
	} else {
		return n;
	}
}

console.log(f(179));
