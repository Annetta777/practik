  //форматирование известной строки
  const myName = 'Anna'
  const programmingLanguage = 'Javascript'
  const courseCreatorName = 'Vladilen Minin'
  let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования
  ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.`
  myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
  console.log( myInfoText)
  console.log(myInfoText.length)
  console.log(myInfoText[0], myInfoText[myInfoText.length - 1])

  //форматирование строки от пользователя
  let userName = prompt('What is your name?')
  let userAge = prompt('How old are you?')
  userName = userName.toUpperCase().trim()
  userAge = Number(userAge.trim())
  alert(`Your name is ${userName} and you are ${userAge} years old`)

  //Программу, которая по введенным пользователем числам и строке будет обрезать эту строку
  let userString = prompt('Enter string to trim')
  userString = userString.trim()
  let startSliceIndex = prompt('Enter the index at which to start trimming the string')
  startSliceIndex = Number(startSliceIndex)
  let endSliseIndex = prompt('Enter the index at which you want to finish trimming the string')
  endSliseIndex = Number(endSliseIndex)
  let string = userString.slice(startSliceIndex, endSliseIndex)
  alert(string)

  //обрезать текст до определённого слова
  let userText = prompt('Enter the text')
  userText = userText.trim()
  let wordFromText = prompt('Enter a word from the text')
  wordFromText = wordFromText.trim()
  let indexOfWord = userText.indexOf(wordFromText)
  let result = userText.slice(0,indexOfWord)
  alert(`Result: ${result}`)

  // работа с текстом
  let  javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
  let halfIndex = Math.floor(javaScriptDescription.length / 2)
  javaScriptDescription = javaScriptDescription
  .slice(0, halfIndex)
  .replaceAll('а', 'А')
  .replaceAll(' ', '')
  .repeat(3)
  let ofHalfIndex = Math.floor(javaScriptDescription.length / 2)
  console.log(javaScriptDescription[ofHalfIndex])
  console.log(javaScriptDescription)