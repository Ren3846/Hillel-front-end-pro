//  написать функцию счетчик, простейший способ замыкания
// вначале создаем экземпляр, далее
// при вызове мы должны получать изменившееся значение счетчика



function Counter(res = 0) {
	return () => res++
}
const cnt = new Counter();
console.log(cnt());
console.log(cnt());


