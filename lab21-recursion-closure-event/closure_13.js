// написать декоратор который будет cрабатывать через n секунд

function wrapper(func, delay) {
	return function (...arg) {
		setTimeout(() => {
			return func.apply(this, arg)
		}, delay * 1000)
	}
}

function myFunc(){
	console.log("call func");
}

myFunc = wrapper(myFunc, 3);

myFunc();
