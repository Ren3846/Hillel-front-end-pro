// посчитать сумму всех чисел в сложной структуре -> 134

const data = {
	a: [2,3, {name: "Ivan", val: 22}],
	b: {
		lala: 5,
		lala1: "some-text",
		lala3: [2, "some", "another"]
	},
	c: "some text",
	ddd: 100,
}
function calc(data) {
	let res = 0;

	for (const key in data) {
		const item = data[key];
		if (typeof item === "number" && !isNaN(item)){
			res += item;
		} else if(typeof item === "object") {
			res += calc(item);
		}
	}
	return res;
}

console.log(calc(data));
// res 100
