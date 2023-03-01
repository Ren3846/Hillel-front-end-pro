// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом.
// Выведите YES или NO.
// 	Нельзя пользоваться циклами

function isPalindrome(str) {
	if (str.length < 2) {
		return "YES";
	}
	if (str[0] !== str[str.length - 1]) {
		return "NO";
	} else {
		return isPalindrome(str.slice(1, -1))
	}
}

console.log("maam", isPalindrome("maam"));
console.log("mabam", isPalindrome("mabam"));
console.log("mama", isPalindrome("mama"));
