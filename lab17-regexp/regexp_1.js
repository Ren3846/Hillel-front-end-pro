
// проверить емеил на валидность
function isEmailValid(str) {
	return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/i.test(str)
}

console.log(isEmailValid("saas@sdf.AA"));
// console.log(isEmailValid("saassdf.fg"));
