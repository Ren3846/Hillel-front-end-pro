function removeProperty(obj, key) {
  delete obj[key];
  return obj;
}
console.log(removeProperty({ a: 1, b: 2 }, 'b'));
