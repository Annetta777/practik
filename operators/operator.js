//Форма авторизации и регистрации
const existedUserLogin = 'dron_udon'
const existedUserPassword = 'XyZ@45'
let userLogin = prompt('Enter login')
userLogin = userLogin.trim()
let userPassword = prompt('Enter password')
userPassword = userPassword.trim()
 if (existedUserLogin === userLogin) alert (`Welcome, ${userLogin}`)
 else alert( 'Login and (or) password entered incorrectly')

// тест
 let correctAnswers = 0
 let incorrectAnswers = 0

 const answer1 = 4
 const answer2 = 4
 const answer3 = 1
 const answer4 = 12
 const answer5 = 6

 const question1 = prompt('Сколько будет 2 + 2?')
 if (answer1 === Number(question1)) {
  alert('Ответ Верный')
  correctAnswers += 1
 } else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
 }
 const question2 = prompt('Сколько будет 2 * 2?')
 if (answer2 === Number(question2)) {
  alert('Ответ Верный')
  correctAnswers += 1
 } else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
 }
 const question3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?')
 if (answer3 === Number(question3)) {
  alert('Ответ Верный')
  correctAnswers += 1
 } else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
 }
 const question4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?')
 if (answer4 === Number(question4)) {
  alert('Ответ Верный')
  correctAnswers += 1
 } else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
 }
 const question5 = prompt('Сколько будет 2 + 2 * 2?')
 if (answer5 === Number(question5)) {
  alert('Ответ Верный')
  correctAnswers += 1
 } else {
  alert('Ответ Неверный')
  incorrectAnswers += 1
 }

 alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`)

//confirm
 if (confirm('JavaScript появился в 1995 году?') == true) {
  alert('Верно!')
} else {
  alert('Неверно! JavaScript появился в 1995 году')
}

if (confirm('Спецификация JavaScript называется ECMAScript?') == true) {
  alert('Верно!')
} else {
  alert('Неверно! Спецификация JavaScript называется ECMAScript')
}

if (confirm('JavaScript был создан за 1 месяц?') == true) {
  alert('Неверно! JavaScript был создан за 10 дней')
} else {
  alert('Верно! JavaScript был создан за 10 дней')
}

// цикл for на цикл с while и do while
for (let i = 0; i < 3; i += 1) {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
  }
}

let i = 0
while(i < 3) {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
  }
  i += 1
}

let j = 0
do {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
  }
  j += 1
} while(j < 3)

// сумма числа
let sum = 0
for ( i = 1; i <= 100; i++) {
  sum += i
}
console.log(sum)

//реализация скидки
let clientName = prompt('Введите имя клиента')
let clientSpentForAllTime = prompt('Сколько клиент потратил за все время?')
clientSpentForAllTime = Number(clientSpentForAllTime)
let clientSpentToday = prompt('Сколько клиент потратил сегодня?')
clientSpentToday = Number(clientSpentToday)

let discount = 0
if (!clientSpentToday || !clientSpentForAllTime) {
  alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.')
} else if ( clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
  discount = 10
} else if ( clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
  discount = 20
} else {
  discount = 30
}
alert(`Вам предоставляется скидка в ${discount}%!`)
clientSpentToday = clientSpentToday - (clientSpentToday * discount / 100)
clientSpentForAllTime += clientSpentToday
alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}.`)


// Проверка пароля на валидность

let playerPassword = prompt('Введите пароль')
const truePassword = 'Пароль валидный. Добро пожаловать в аккаунт!'
const falsePassword = 'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.'

if (playerPassword.length < 3 && playerPassword.length > 20) {
  alert(falsePassword)
} else {
  let Upper = /[A-Z]/.test(playerPassword)
  let Lower = /[a-z]/.test(playerPassword)
  let Number = /[\d]/.test(playerPassword)
  if (Upper === true && Lower === true && Number === true) {
    alert(truePassword)
  } else {
    alert(falsePassword)
  }

}
   
