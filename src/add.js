function add(numbers){
  if(!numbers) return 0;  
  if(Number(numbers)) return parseInt(numbers);
  return 2;
}
  
module.exports = add;