//сумма числа
const getSumOfNumbers = (number, type = 'odd') => {
let sum = 0
for (i = 0; i <= number; i++) {
  const isEven = i % 2 === 0
  const isOdd = !isEven
  if (!type) {
    sum += i
  } 
  else if (isEven && type === 'even') {
    sum += i
  }
  else if (isOdd && type === 'odd') {
    sum += i
  }
}
return sum
}
const itog = getSumOfNumbers(10, 'even')
console.log(itog)

//функция, показывающая количество делителей
function getDivisors (number = 1) {
if (!Number.isInteger(number) || number < 0) {
alert('number должен быть целым числом и больше нуля!')
} else {
counter = 0
for (i = number; i > 0; i--) {
  const isDivisor = number % i === 0
  if (isDivisor) {
  counter += 1
  }
}
return counter
}
}
const result = getDivisors(12)
console.log(result)

// функция для задавания вопроса пользователю и автоматическая проверка ответа
const checkQuestionAnswer = (question, correctAnswer) => {
let userAnswer = prompt(question)
userAnswer = userAnswer.trim().toLowerCase()
if (correctAnswer.toLowerCase() === userAnswer) {
  alert('Ответ верный')
} else {
  alert('Ответ неверный')
}
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?',
'32')
checkQuestionAnswer('Как называется самая маленькая птица в мире?',
'Колибри')

//callback

const showSuccessMessage = (message) => {
console.log(message)
}
const showErrorMessage = (message) => {
console.error(message)
}

const checkTextOnErrorSymbol = (text, errorSymbol, successCallback,errorCallback) => {
let countErrors = 0
for (i = 0, i < text.length; i += 1;) {
  const currentSymbol = text[i]
  if (currentSymbol === errorSymbol && errorCallback) {
    errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`)
    countErrors += 1
  } 
}

if (successCallback && countErrors === 0) {
    successCallback('В данном тексте нет запрещенных символов')
  }
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)