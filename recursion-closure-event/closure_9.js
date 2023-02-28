// считаем сумму по цепочке бесконечное число раз sum(2)(3)(7)

function sum(firstNum = 0) {
	function func(b = 0){
		firstNum += b;
		return func
	}
	func.toString = () => {
		return firstNum;
	}
	return func;
}

// alert(sum(2)(3)(7)(10)(88)(1)(1000));

console.log(sum(2)(3)(7)(10)(88)(1)(1000).toString());


