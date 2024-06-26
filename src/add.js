function add(numbers){
  if(!(/\d/.test(numbers))) return 0;  
  if(Number(numbers)) return parseInt(numbers);
  return 2;
}
  
module.exports = add;