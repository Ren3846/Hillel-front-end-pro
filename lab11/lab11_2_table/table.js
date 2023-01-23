const totalRows = 10;
const cellsInRow = 10;

function drawTable() {
  const div1 = document.getElementById('div1');

  const tbl = document.createElement('table');

  for (let r = 0; r < totalRows; r++) {
    const row = document.createElement('tr');

    for (let c = 1; c <= cellsInRow; c++) {
      const cell = document.createElement('td');

      const cellText = document.createTextNode(r * 10 + c);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tbl.appendChild(row);
  }

  div1.appendChild(tbl);
}
window.onload = drawTable;
