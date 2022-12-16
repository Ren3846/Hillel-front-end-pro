// Створити масив з 10 студентів.
const students = [
  'Alex',
  'Ivan',
  'Petro',
  'Andriy',
  'Vlad',
  'Serhiy',
  'Vadim',
  'Elena',
  'Fedor',
  'Stacy',
];

// Додати 2 студенти в кінець масиву
students.push('Renat');
students.push('Georgiy');

// Додати 2 студенти на початок масиву
students.unshift('Olya');
students.unshift('Tunar');

// Видалити останнього студента
students.pop();

// Видалити першого студента
students.shift();

// Користувач вводить імя студента, перевірити чи такий студент є масиві і вивести результат в консоль
const find = prompt('Введіть імʼя');
if (students.includes(find)) {
  console.log('Є такі');
} else {
  console.log('Нема таких');
}

// Створити ще один масив з існуючого, включивши в нього студентів починаючи з індекса 3 і закінчуючи індесом 6 включно ( 3,4,5,6)
const someStudents = students.slice(3, 7);

// Створити ще один масив нових студентів(довжина 5), і обєднати існуючих студентів з новими у новий масив усі студенти. ДАЛІ ПРАЦЮЄМО З МАСИВОМ УСІ СТУДЕНТИ
const newStudents = ['Mariya', 'Bogdan', 'Volodimir', 'Darina', 'Michael'];
const allStudents = students.concat(newStudents);

// Видалити студента номер 4
allStudents.splice(3, 1);

// Замінити студента номер 6 на студента з ім'ям Іван
allStudents.splice(5, 1, 'IVAN');

// Вививести усіх студентів у консоль у вигляді стрічки, студенти повинні бути розділені символом тире -
console.log(allStudents.join(' - '));
