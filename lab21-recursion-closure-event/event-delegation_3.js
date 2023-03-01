//   добавить обработчик кликов который будет показывать или скрывать элементы для нужного taba - index4

document.addEventListener("DOMContentLoaded", init);

function init() {
	document.addEventListener("click", e => {
		const id = e.target.dataset.content;
		if (!id) {
			return;
		}
		const elem = document.querySelector(`.content${id}`);
		const elems = document.querySelectorAll(".tab-content");
		elems.forEach(el => el.classList.remove("visible"));
		elem.classList.add("visible");

	})


}
