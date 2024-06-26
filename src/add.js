function add(numbers){
  if (!numbers || numbers.trim() === "") return 0;

  if (!isNaN(numbers)) return parseInt(numbers);
 // Check for custom delimiter
 let delimiter = ",";
 if (numbers.startsWith("//")) {
   const delimiterEndIndex = numbers.indexOf('\n');
   if (delimiterEndIndex === -1) {
     throw new Error('Invalid input: Missing newline after delimiter');
   }
   delimiter = numbers.substring(2, delimiterEndIndex);
   numbers = numbers.substring(delimiterEndIndex + 1);
 }

 // Replace newline characters with delimiter
 numbers = numbers.replace(/\n/g, delimiter);

 // Validate and split numbers
 if (numbers.endsWith(delimiter)) {
   throw new Error('Invalid input: Trailing separator not allowed');
 }
 
 if (numbers.includes(delimiter)) {
   let numArray = numbers.split(delimiter)
     .map(num => num.trim()) // Remove spaces
     .filter(num => num !== '') // Filter out empty values
     .map(num => {
       if (isNaN(num)) {
         throw new Error(`'${delimiter}' expected`);
       }
       return parseInt(num, 10);
     });
   return numArray.reduce((acc, curr) => acc + curr, 0);
 }

 return parseInt(numbers, 10);
}
  
module.exports = add;