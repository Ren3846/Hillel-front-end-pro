// Singleton
// 1. реализовать конструктор который бы создавал счетчик в замыкании
/*function Counter(num = 0) {
	return {
		get(){
			return num;
		},
		inc() {
			return ++num;
		}
	}
}

const cnt = new Counter(10);
cnt.inc();
cnt.inc();
console.log(cnt.get());
const cnt2 = new Counter();
cnt2.inc();
console.log(cnt2.get());
console.log(cnt2 == cnt);*/



// 2. а теперь реализуем это через синглтон, чтобы нам всегда возвращался один экземпляр
const Singleton = (function () {
	let instance;
	let cnt;
	return function (num = 0) {
		if (!instance) {
			cnt = num;
			instance = {
				get(){
					return cnt;
				},
				inc() {
					return ++cnt;
				}
			}
		}
		return instance;
	}
})()

const sing = Singleton(100);
sing.inc();
sing.inc();
console.log(sing.get());

const sing2 = Singleton();

sing2.inc();
console.log(sing2.get());
console.log(sing === sing2);


