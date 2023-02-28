//   добавить обработчик который будет включать анимацию - index5

document.addEventListener("DOMContentLoaded", init);

function init() {

document.addEventListener("mouseover", e => {
	const aName = e.target.dataset.animation;

	if (!aName) return;
	e.target.classList.add(aName);
	setTimeout(() => {
		e.target.classList.remove(aName);
	}, 1000)
})

}
