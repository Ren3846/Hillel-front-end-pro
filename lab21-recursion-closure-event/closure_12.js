// написать кэширующий декоратор, сохраняем результат для конкретных аргументов

function wrapper(func) {
	const cash = {};
	return function (...arg) {
		const start = Date.now();
		const key = arg.toString();
		if (key in cash) {
			console.log("work time = ", Date.now() - start);
			return cash[key];
		}
		const res = func.apply(this, arg);
		cash[key] = res;
		console.log("work time = ", Date.now() - start);
		return res;
	}
}

function myFunc(num){
	let counter = 100;
	for (let i = 0; i < 100 * num ;i++) {
		counter++;
	}
	return counter;
}

myFunc = wrapper(myFunc);

myFunc(100000);
myFunc(100000);
myFunc(10000000);
myFunc(10000000);
myFunc(10000000);
myFunc(10000000);
myFunc(10000000);



