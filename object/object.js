// ex.1
const users = [
  {
      username: 'David',
      status: 'online',
      lastActivity: 10
  }, {
      username: 'Lucy', 
      status: 'offline',
      lastActivity: 22
  }, {
      username: 'Bob', 
      status: 'online',
      lastActivity: 104
  }
]
const usersOnline = users.filter((person) => person.status === 'online')
const usersOnlineNames = usersOnline.map((person) => person.username).join(', ')

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)

//ex.2
const orders = [3, 1, 4, 2]
const patients = [
  {
     id: 4,
     name: 'Viktoria'
  }, {
     id: 1, 
     name: 'Mary'
  }, {
     id: 3,
     name: 'Oleg'
  }, {
     id: 2,
     name: 'Petr'
  }
]

const giveTalonsInOrder = (patients, orders) => {
  const talonsInOrder = patients.reduce((acc, patient) => {
    acc[patient.id] = patient
    return acc
  }, {})
  return orders.map((order) => talonsInOrder[order])
}

const results = giveTalonsInOrder(patients, orders)
console.log('result', results)

//ex.3

/*handleObject принимает в себя 3 параметра:
1. obj. Объект, с которым будет работать функция
2. key. ключ объекта
3. action. Действие, которое мы будем совершать над объектом
*/

const handleObject = (obj, key, action) => {
  if (action === 'get') {
    return obj[key]
  } else if (action === 'add') {
    obj[key] = ''
    return obj
  } else if ( action === 'delete') {
    delete obj[key]
    return obj
  } else {
    return obj
  }
}
const students = {
  name: 'Maxim',
  programmingLanguage: 'JavaScript',
  }
  const result = handleObject(students, 'programmingLanguage',
  'delete');
  console.log('result', result);

//ex.4
/*
1. student - объект, содержащий информацию о студенте
2. jobName - название новой работы студента
*/

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }
const giveJobToStudent = (student, jobname) => {
  alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobname}`)
  student.job = jobname
  return student
 }

  const updatedStudent = giveJobToStudent(student, 'веб-разработчик')
  console.log(student)

 //ex.5 Представьте, что вы разрабатываете интернет магазин по доставке еды. Вам поставили задачу подсчета итоговой суммы всех товаров в корзине.

 const groceries = {
  "Orange Juice": {
      price : 1.5,
      discount: 10, 
  },
  "Chocolate": {
      price : 2,
      discount : 0,
  },
// more items...
}

function getTotalPriceOfShoppingBag (shoppingBag) {
  const shoppingItems = Object.values(shoppingBag)

  if (shoppingItems.length === 0) {
    return 0
  }

  const totalPrice = shoppingItems.reduce((acc, currentProduct) => {
    const {product, quantity} = currentProduct
    const productObject = groceries[product]
    const {price, discount} = productObject
    const priceWithDiscount = price - (price * discount / 100)
    const totalProductPrice = priceWithDiscount * quantity
    return acc + totalProductPrice
  }, 0)
  return totalPrice.toFixed(2)
}

const shoppingBag = [
  { product: 'Chocolate', quantity: 3 },
  { product: 'Orange Juice', quantity: 23 },
  ]

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag)
console.log('totalPrice', totalPrice)

//ex.6 В игре есть 2 игрока: герой и враг. Они будут драться друг с другом. У каждого игрока есть шкала здоровья, которая изначально равна 100. При каждом ударе у противоположного игрока отнимается по 10 единиц здоровья. Побеждает тот, у кого здоровье осталось больше 0.

const hero = {
  name: 'Batman',
  health: 100,
  heatEnemy: (enemy) => enemy.health -= 10
  }
const enemy = {
  name: 'Joker',
  health: 100,
  heatHero: (hero) => hero.health -= 10
  }
function startGame (heroPlayer, enemyPlayer) {
  while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
    function getRandomNumberInRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    let randomNumber = getRandomNumberInRange(0, 1)
    if (randomNumber === 0) {
      if (enemyPlayer.health > 0) {
      heroPlayer.heatEnemy(enemyPlayer)
      }
      else {
        break
      }
    }
   else {
    if (heroPlayer.health > 0) {
    enemyPlayer.heatHero(heroPlayer)
    }
    else {
       break
      }
    }
  }

  if (enemyPlayer.health <= 0) {
    alert(`${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`)
  } else {
    alert(`${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`)
  }
}

startGame(hero, enemy)

//ex.7 Представьте, что в полицейском участке проводится расследование. Было совершено несколько преступлений. У полицейских есть другие более приоритетные задания, поэтому они попросили вас написать программу, которая будет вычислять преступника по уже известным данным. Преступником является тот, кто видел всех убитых людей в день убийства.

const suspectInfo = {
  'Brad': [],
  'Megan': ['Ben', 'Kevin'],
  'Finn': [],
  }
const deadPeople = ['Ben']

function getKiller (suspectInfo, deadPeople) {
  let killerName = ''
  Object.entries(suspectInfo).forEach((data) => {
    const suspectPerson = data[0]
    const peopleWereSeen = data[1]
    const isKiller = deadPeople.every((deadName) => peopleWereSeen.includes(deadName))
    if (isKiller) {
      killerName = suspectPerson
    }
  })
  return killerName
}

let killerName = getKiller(suspectInfo, deadPeople)
console.log(killerName)

// ex.8 Лотерея - это игра, в которой случайным образом определяют победителя и дают ему выигрыш. Сейчас ваша задача будет разработать логику для такой игры.

const todaysWinner = {
  prize: '10 000$',
}
const applicants = {
  '001': {
  name: 'Максим',
  age: 25,
  },
  '201': {
  name: 'Светлана',
  age: 20,
  },
  '304': {
  name: 'Екатерина',
  age: 35,
  },
}
  
function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getWinner (applicants, winnerObject) {
  const applicantsKeys = Object.keys(applicants)
  const applicantsRandom = getRandomNumberInRange(0, applicantsKeys.length)
  const applicantsWinner = applicantsKeys[applicantsRandom]
  const winner = applicants[applicantsWinner]
  return {
    ...winnerObject,
    ...winner
  }
}

const resultWinner = getWinner(applicants, todaysWinner)
console.log('resultWinner', resultWinner)