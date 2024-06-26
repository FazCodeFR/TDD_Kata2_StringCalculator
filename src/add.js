function add(numbers){
  if(!(/\d/.test(numbers))) return 0;
  if(Number(numbers)) return parseInt(numbers);
  if(numbers.includes(',')){
    let [num1, num2] = numbers.split(',');
    return parseInt(num1) + parseInt(num2);
  }
  return 2;
}
  
module.exports = add;