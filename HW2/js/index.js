//Task 1
// Дан объект с городами и странами. Вывести масив значения в котором будут строки преобразованные в данный формат: <Столица> - это <Страна>.

const citiesAndCountries = {
  Киев: 'Украина',
  'Нью-Йорк': 'США',
  Амстердам: 'Нидерланды',
  Берлин: 'Германия',
  Париж: 'Франция',
  Лиссабон: 'Португалия',
  Вена: 'Австрия',
};

const keys = Object.keys(citiesAndCountries);
const finalArray = [];

for (const key of keys) {
  finalArray.push(key + ' - это ' + citiesAndCountries[key]);
}

console.log(finalArray);

// Task 2
// Создать функцию которая выведет многомерный массив A. Данный массив содержит в себе список других массивов B. Массивы B должны содержать по 3 значения. Максимальное значение (в примере это переменная amount) должно делится на 3 нацело.

const amount = 9;
if (amount % 3 !== 0) {
  throw new Error('Не ділиться на 3');
}
const mainArray = [];
for (let i = 1; i <= amount; i += 3) {
  const innerArr = [];
  for (let j = i; j <= i + 2; j++) {
    innerArr[innerArr.length] = j;
  }
  mainArray[mainArray.length] = innerArr;
}

console.log(mainArray);

//Task 3
// Cоздать объект с названиями дней недели. Где ключами будут ru и en, a значением свойства ru будет массив с названиями дней недели на русском, а en - на английском. После написать функцию которая будет выводить в консоль название дня недели пользуясь выше созданным объектом. Все дни недели начинаются с 1 и заканичаются цифрой 7 (1- понедельник, 7 - воскресенье). Функция хранит переменную lang - название языка дня недели и переменную day - число дня недели.

const namesOfDays = {
  ru: [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ],
  en: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
};

function getNameOfDay() {
  const lang = 'en';
  const day = 4;

  return namesOfDays[lang][day - 1];
}

console.log(getNameOfDay());

// //Task 4
// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел из массива минимум 4 положительных целых чисел. Не передаются числа с плавающей запятой или неположительные целые числа.

const arrayOfNumbers = [12, 898, 899, 900];

let firstNumber = arrayOfNumbers[0];
let secondNumber = arrayOfNumbers[1];

for (let i = 1; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] <= firstNumber) {
    firstNumber = arrayOfNumbers[i];
  }
}

for (let i = 1; i < arrayOfNumbers.length; i++) {
  if (arrayOfNumbers[i] > firstNumber && arrayOfNumbers[i] <= secondNumber) {
    secondNumber = arrayOfNumbers[i];
  }
}

console.log(firstNumber + secondNumber);

//Task 5
// Дан массив единиц и нулей, преобразуйте эквивалентное двоичное значение в целое число.

const arr = [1, 1, 1, 0, 0, 1];
const reversed = arr.reverse();
console.log(reversed);

let decimal = 0;

for (let i = 0; i < reversed.length; i++) {
  if (reversed[i] === 1) {
    let countDecimals = Math.pow(2, i);
    decimal += countDecimals;
  }
}
console.log(decimal);
