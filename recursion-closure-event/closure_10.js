// написать функцию декоратор которая будет выводить в консоль start/stop при работе

function wrapper(func) {
	return function (...arg) {
		console.log("start");
		// const res = func(...arg);
		const res = func.apply(this, arg);
		// const res = func.call(this, ...arg);
		console.log("stop");
		return res;
	}
}

function myFunc(name){
	console.log("Hello " + name);
	return 3;
}

const newFunc = wrapper(myFunc);
// myFunc = wrapper(myFunc);

