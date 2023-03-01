// дана последовательность из фруктов и овощей, нам надо в этой строке заменить все названия
// товаров стоимостью 25 USD и 3 UAH на "авокадо"

const data = `
банан 27 UAH
ананас 30 UAH
картошка 25 USD
дыня 4 USD
яблоко 3 UAH
лук 25 USD"`;

function replaceNeeded(str) {
	return str.replace(/[а-я]+(?= (25 USD|3 UAH))/ig, "авокадо");
}
console.log(replaceNeeded(data));

