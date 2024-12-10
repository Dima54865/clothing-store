// Получаем элементы ввода
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operator = document.getElementById('operator');
const result = document.getElementById('result');

// Определяем функции калькулятора
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y === 0) {
    return 'Ошибка: Деление на ноль!';
  }
  return x / y;
}

// Добавляем обработчик события на кнопку "Рассчитать"
document.getElementById('calculate').addEventListener('click', () => {
  const num1Value = parseFloat(num1.value);
  const num2Value = parseFloat(num2.value);
  const operatorValue = operator.value;

  let resultValue;
  switch (operatorValue) {
    case '+':
      resultValue = add(num1Value, num2Value);
      break;
    case '-':
      resultValue = subtract(num1Value, num2Value);
      break;
    case '*':
      resultValue = multiply(num1Value, num2Value);
      break;
    case '/':
      resultValue = divide(num1Value, num2Value);
      break;
    default:
      resultValue = 'Ошибка: Недопустимая операция!';
  }

  result.textContent = `Результат: ${resultValue}`;
});