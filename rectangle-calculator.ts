// Rectangle Calculator

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer)));
}

async function main() {
  const width = Number(await askQuestion('Type the rectangle width: '));
  const height = Number(await askQuestion('Type the rectangle height: '));

  function rectangleArea(width: number, height: number): number {
    return width * height;
  }
  
  function rectanglePerimeter(width: number, height: number): number {
    return 2 * (width + height);
  }
  
  const area = rectangleArea(width, height);
  const perimeter = rectanglePerimeter(width, height);
  
  console.log(`Rectangle area is ${area} square meters`);
  console.log(`Rectangle perimeter is ${perimeter} meters`);

  rl.close();
}

main();
