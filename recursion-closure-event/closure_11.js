//  написать декоратор который будет выводить время работы функции

function wrapper(func) {
	return function (...arg) {
		const start = Date.now();
		// const res = func(...arg);
		const res = func.apply(this, arg);
		// const res = func.call(this, ...arg);
		console.log("work time = ", Date.now() - start);
		return res;
	}
}

function myFunc(){
	let counter = 100;
	for (let i = 0; i < 1000000000;i++) {
		counter++;
	}
}

myFunc = wrapper(myFunc);

myFunc()

