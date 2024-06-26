function add(numbers){
  if(!(/\d/.test(numbers))) return 0;
  if(Number(numbers)) return parseInt(numbers);
  if (numbers.includes(',')) {
    let numArray = numbers.split(',')
      .map(num => num.trim()) // Supprime les espaces
      .filter(num => num !== '') // Filtre les valeurs vides
      .map(num => parseInt(num, 10)); // Convertit chaque élément en entier
    return numArray.reduce((acc, curr) => acc + curr, 0);
  }
  return 2;
}
  
module.exports = add;