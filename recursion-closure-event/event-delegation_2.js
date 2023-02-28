// 1. нам надо сделать так чтобы фон менялся на ячейке
// 2. усложним задачу, сделаем удаление фона если клик идет по той же ячейке
// 3 переписать на использование классов

document.addEventListener("DOMContentLoaded", init);

function init() {
	const table = document.querySelector(".my-table");
	table.addEventListener("click", changeBg);

}

function changeBg(event) {
	let target = event.target.closest("td");
	let className = "green";
	if (target.dataset.id % 2 !== 0) {
		className = "red";
	}
	target.classList.toggle(className);
	clearCell(target);

}
function clearCell(target) {
	const tdArr = document.querySelectorAll(".my-table td");
	// console.log(Array.isArray(tdArr));
	tdArr.forEach(el => {
		if(el !== target ) {
			el.classList.remove("red");
			el.classList.remove("green");
		}
	})
}
