document.body.addEventListener('mouseover', function (event) {
  let boxOne = event.target.closest('.box');

  if (boxOne) {
    boxOne.textContent = 'HOVER ME <div>';
  }
});

document.body.addEventListener('mouseout', function (event) {
  let boxOne = event.target.closest('.box');

  if (boxOne) {
    boxOne.textContent = 'HOVER ME';
  }
});
