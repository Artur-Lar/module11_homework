function getPercents(percent, number) {
  const result = (percent / 100) * number;
  return result;
}

const number = parseFloat(prompt("Введите число:"));
const percent = parseFloat(prompt("Введите процент:"));

const result = getPercents(percent, number);

alert(`${percent}% от ${number} равно ${result}`);
