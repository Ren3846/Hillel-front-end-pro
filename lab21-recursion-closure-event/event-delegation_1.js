// делегирование, прием когда у нас есть много элементов которые обрабатываются одинаково и чтобы не подписываться на
// каждый мы подписываемся на контейнер который их содержит

// 1. у нас есть таблица index2.html нужно повесить обработчик на таблицу и менять фон каждого элемента по клику
// 2. далее усложним, сделаем снятие фона на других элементах
// 3. еще усложним будет проверять data-id атрибут и для четных значения ставить зеленый фон

document.addEventListener("DOMContentLoaded", init);

function init() {
	const table = document.querySelector(".my-table");
	table.addEventListener("click", changeBg);
}

function changeBg(event) {
	clearCell();
	if (event.target.dataset.id % 2 === 0) {
		event.target.style.background = "green";
	} else {
		event.target.style.background = "red";
	}

}

function clearCell() {
	const tdArr = document.querySelectorAll(".my-table td");
	// console.log(Array.isArray(tdArr));
	tdArr.forEach(el => {
		el.style.background = "";
	})
}

