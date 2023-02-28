// удвойте значения сложного массива с помощью рекурсии
// [3,5, [1,3, [6,2]], 33]

function double(arr) {
	for (let i = 0; i < arr.length; i++){
		// arr[i] = arr[i] * 2;
		if (Array.isArray(arr[i])) {
			double(arr[i]);
		} else {
			arr[i] *= 2;
		}
	}
}
let arr = [3, 5, [1, 3, [6, 2]], 33];

console.log(JSON.stringify(arr));
double(arr);
console.log(JSON.stringify(arr));

