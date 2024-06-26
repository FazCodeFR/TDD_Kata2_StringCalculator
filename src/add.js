function add(numbers) {
  if (!numbers || numbers.trim() === "") return 0;

  if (!isNaN(numbers)) return parseInt(numbers);

  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const customDelimiter = extractCustomDelimiter(numbers);
    delimiter = customDelimiter.delimiter;
    numbers = customDelimiter.numbers;
  }

  numbers = replaceNewlinesWithDelimiter(numbers, delimiter);
  validateTrailingSeparator(numbers, delimiter);

  return sumNumbers(numbers, delimiter);
}

function extractCustomDelimiter(numbers) {
  const delimiterEndIndex = numbers.indexOf('\n');
  if (delimiterEndIndex === -1) {
    throw new Error('Invalid input: Missing newline after delimiter');
  }
  const delimiter = numbers.substring(2, delimiterEndIndex);
  const remainingNumbers = numbers.substring(delimiterEndIndex + 1);
  return { delimiter, numbers: remainingNumbers };
}

function replaceNewlinesWithDelimiter(numbers, delimiter) {
  return numbers.replace(/\n/g, delimiter);
}

function validateTrailingSeparator(numbers, delimiter) {
  if (numbers.endsWith(delimiter)) {
    throw new Error('Invalid input: Trailing separator not allowed');
  }
}

function sumNumbers(numbers, delimiter) {
  if (numbers.includes(delimiter)) {
    const numArray = numbers.split(delimiter)
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