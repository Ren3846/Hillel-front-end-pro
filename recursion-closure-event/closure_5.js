// написать функцию которая будет умножать три числа дополнительными вызовами mult(2)(3)(4)


function mult(a) {
	// return (b) => (c) => a * b * c;
	return function (b) {
		return function (c) {
			return a * b * c;
		}
	}
}
console.log(mult(2)(3)(5));

