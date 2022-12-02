const city = prompt('Введіть місто');

switch (city) {
  case 'Львів':
    console.log(`Координати для міста ${city}: 49.847212,24.021917`);
    break;
  case 'Київ':
    console.log(`Координати для міста ${city}: 50.436601,30.508116`);
    break;
  case 'Запоріжжя':
    console.log(`Координати для міста ${city}: 47.849783,35.117126`);
    break;
  case 'Маріуполь':
    console.log(`Координати для міста ${city}: 47.109495,37.547466`);
    break;
  case 'Харків':
    console.log(`Координати для міста ${city}: 49.987133,36.229560`);
    break;
  default:
    console.log('Немає координат для такого міста');
}
