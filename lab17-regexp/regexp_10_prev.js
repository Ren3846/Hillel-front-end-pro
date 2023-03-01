//Дана строка цифр, замените любую цифру меньше 5 на «0», а любую цифру от 5 и больше на «1».
// Необходимо вернуть полученную строку.

// 13474 -> 00010




// -------------------
function transformRegExp(str) {
	return str.replace(/[1-4]/g, "0").replace(/[5-9]/g, "1")
}
const str = "134749012987987";
console.log(str);
console.log(transformRegExp(str));

