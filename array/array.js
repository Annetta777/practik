/*//система очереди для почты
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
const result = getSumOfSequence(5)
console.log(result)
*/
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
