//система очереди для почты
const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = () => {
const clientName = peopleWaiting.shift()
alert(`${clientName} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек`)
}

const leaveQueueWithoutParcel = () => {
const clientName = peopleWaiting.pop()
alert(`${clientName} не получил(а) посылку и ушел(ла) из очереди`)
}


giveParcel()
giveParcel()
giveParcel()

for (i = peopleWaiting.length; i > 0; i -= 1) {
leaveQueueWithoutParcel()
}

//функция, которая будет создавать массив из чисел и высчитывать сумму первого и последнего элементов массива
getSumOfSequence = (number) => {
const finalArray = []
for (i = 1; i <= number; i++) {
finalArray.push(i)
}
return finalArray[0] + finalArray[finalArray.length - 1]
}
const resultate = getSumOfSequence(5)
console.log(resultate)

//поиск по названию и обновленная цена
const coffees = ['Latte', 'Cappuccino', 'Americano']
const prices = [1.5, 1, 2]
let coffeeName = prompt("Поиск кофе по названию:")
coffeeName = coffeeName.trim().toLowerCase()
let clientsEstimations = []

const updatedPrices = prices.map((i) => i + 0.5)
const favoriteCoffeeIndex = coffees.findIndex((coffee) => coffee.toLowerCase() === coffeeName)
const favoriteCoffeeName = coffees[favoriteCoffeeIndex]

if (favoriteCoffeeName) {
alert(`Держите ваш любимый кофе ${favoriteCoffeeName}. Он ${favoriteCoffeeIndex + 1}-й по популярности в нашей кофейне. Кофе ${favoriteCoffeeName} сейчас стоит ${updatedPrices[favoriteCoffeeIndex]} евро`)
} else {
alert('К сожалению, такого вида кофе нет в наличии')
}

const askClientToGiveEstimation = () => {
let askForClient = prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
askForClient = Number(askForClient.trim())
if (askForClient >= 1 && askForClient <= 10) {
clientsEstimations.push(askForClient)
}
}

for (i = 0; i < 5; i ++) {
askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter((estimation) => estimation > 5)
const notGoodEstimations = clientsEstimations.filter((estimation) => estimation <= 5)
alert(`Всего положительных оценок: ${goodEstimations.length}. Всего отрицательных оценок: ${notGoodEstimations.length}`)

// посчитать сумму кубов всех чисел в массиве
//способ 1
const numbers = [10, 4, 100, -5, 54, 2]
let sum = 0
for (i = 0; i < numbers.length; i ++) {
sum += numbers[i] ** 3 
}
console.log(sum)
//способ 2
let sum2 = 0
for (number of numbers) {
sum2 += number ** 3
}
console.log(sum2)
//способ 3
let sum3 = 0
numbers.forEach((number) => {
sum3 += number ** 3
})
console.log(sum3)
//способ 4
let sum4 = numbers.reduce((acc, number) => {
return acc + number ** 3}, 0)
console.log(sum4)

//Используя данный массив goals вам необходимо вывести следующую статистику за весь сезон.
const goals = [8, 1, 1, 3, 2, -1, 5]
//Самый результативный матч по количеству голов. 
let superGoal = Math.max(...goals)
let superGoalIndex = goals.indexOf(superGoal)
alert(`Самый результативный матч был под номером ${superGoalIndex + 1}. В
нем было забито ${superGoal} гол(ов).`)
//Самые нерезультативные игры.
let minimumGoal = goals[0]
for (item of goals) {
if (item < minimumGoal && item >= 0) {
  minimumGoal = item
}
}
let minimumGoalIndex = goals.indexOf(minimumGoal)
let minimumGoalIndexArray = []
while ( minimumGoalIndex != -1) {
minimumGoalIndexArray.push(minimumGoalIndex + 1)
minimumGoalIndex = goals.indexOf(minimumGoal, minimumGoalIndex + 1)
}
alert(`Самые нерезультативные матчи были под номерами ${minimumGoalIndexArray}. В каждом из них
было забито по ${minimumGoal} мячу(а).`)
//Общее количество голов за сезон. 
let sumGoals = goals.reduce((acc, goal) => {
if (goal >= 0) {
acc += goal
}
return acc
})
alert(`Общее количество голов за сезон равно ${sumGoals}`)
//Были ли автоматические поражения.
let avtoEndGames = Math.min(...goals)
if ( avtoEndGames = -1) {
  alert ('Были автоматические поражения: да')
} else {
  alert('Были автоматические поражения: нет')
}
//Среднее количество голов за матч.
const halbGoals = goals.reduce((acc, item) => {
if (item > 0) {
acc.push(item / 2)}
return acc
}, [] )
alert(`Среднее количество голов за матч равно ${ halbGoals}`)
//Отсортируйте голы в порядке возрастания
let sortGoal = goals.sort((a, b) => 
{
return a - b}
)
alert (`Голы в порядке возрастания: ${sortGoal}`)

//написать функцию, которая будет работать как мини-калькулятор математических выражений.
const possibleMathSigns = [">", ">", "<", "=", "+", "-", "*", "/"]
const isNumber = (a) => !isNaN(a) && !isNaN(parseFloat(a))
const getMathResult = (expression) => {
let resultExpression = [...expression]
if (expression.length > 3) {
  resultExpression = resultExpression.filter((item) => isNumber(item) ||possibleMathSigns.includes(item))
}

const firstDigit = Number(resultExpression[0])
const secondDigit = Number(resultExpression[resultExpression.length - 1])
const mathSign = resultExpression[1]

if (expression.length < 3||
resultExpression < 3 ||
!isNumber(firstDigit) ||
!isNumber(secondDigit) ||
!possibleMathSigns.includes(mathSign)) {
  return 'Error'
}

switch (mathSign) {
  case ">":
          return firstDigit > secondDigit;
      case "<":
          return firstDigit < secondDigit;
      case "=":
          return firstDigit === secondDigit;
      case "+":
          return firstDigit + secondDigit;
      case "-":
          return firstDigit - secondDigit;
      case "*":
          return firstDigit * secondDigit;
      case "/":
          return firstDigit / secondDigit;
      default:
          return "Ошибка";
  }
}

const expression = ['100', 'hello', 'javascript', , 'help200', '/', 4]
const result = getMathResult(expression)
console.log(result)

//создать матрицу 3x5
let matrix = []
for (i = 0; i < 3; i ++) {
let row = []
for ( j = 0; j < 5; j ++) {
  row.push(j + 1)
}
matrix.push(row)
}
console.log(matrix)

//
const matrix1 = [[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]]
const array = matrix.reduce((acc, number) => {
return [...acc, ...number]
}, [])
console.log(array)