// Rectangle Calculator

const width = Number(prompt('Type the rectangle width: '))


function rectangleArea(width: number, height: number): number {
  return width * height;
}

function rectanglePerimeter(width: number, height: number): number {
  return 2 * (width + height);
}

const area = rectangleArea(10, 5);
const perimeter = rectanglePerimeter(10, 5);

console.log(`Rectangle area is ${area} square meters`);
console.log(`Rectangle perimeter is ${perimeter} meters`);
