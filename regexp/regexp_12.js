// преобразовать кекаб/снейк кейз в камел кейз

// "the-steel-ret" -> "theSteelRet"
// "The_Steel_Ret" -> "TheSteelRet"

const str1 = "the-steel-ret";
const str2 = "The_Steel_Ret";


function toCamelCase(str){
	let res = str.replace(/[-_](\w)/g, (match, group) => group.toUpperCase());
	res = res[0].toLowerCase() + res.slice(1);
	return res;
}
console.log(str1);
console.log(toCamelCase(str1));
console.log(str2);
console.log(toCamelCase(str2));
