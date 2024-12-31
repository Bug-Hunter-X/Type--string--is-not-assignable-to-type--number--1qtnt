function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function safeAdd(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseInt(a) : a;
  const numB = typeof b === 'string' ? parseInt(b) : b;
  return numA + numB;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 4); // 6
const result3 = safeAdd(result1, result2); // 14

const result4 = safeAdd('5', '3'); //8
const result5 = safeAdd(10, '4'); //14
const result6 = safeAdd('10', 4); //14

console.log(result1, result2, result3, result4, result5, result6); 