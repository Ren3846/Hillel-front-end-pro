// Є текстове поле на сторінці.
//Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає
const input = document.getElementsByTagName('input')[0];

input.onblur = function () {
  div.innerText = '';
};

input.onfocus = function () {
  div.innerText = '<div>';
};
