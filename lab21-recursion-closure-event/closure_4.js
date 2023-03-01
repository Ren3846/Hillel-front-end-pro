//  написать функцию калькулятор, которая позволит считать по цепочке, а результат показывать методом, show
// calc.sum(5).sub(1).show();


function Calculator (num = 0) {
	return {
		sum(a) {
			num += a;
			return this;
		},
		mul(a) {
			num *= a;
			return this;
		},
		show() {
			return num;
		}
	}
}

const calc = new Calculator();

console.log(calc.sum(2).sum(10).mul(2).show());
