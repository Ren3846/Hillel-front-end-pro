let totalRows = 10;
let cellsInRow = 10;

function drawTable() {
  let div1 = document.getElementById('div1');

  let tbl = document.createElement('table');

  for (let r = 0; r < totalRows; r++) {
    let row = document.createElement('tr');

    for (let c = 1; c <= cellsInRow; c++) {
      let cell = document.createElement('td');

      let cellText = document.createTextNode(r * 10 + c);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tbl.appendChild(row);
  }

  div1.appendChild(tbl);
}
window.onload = drawTable;
