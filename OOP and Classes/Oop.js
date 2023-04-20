/*ex.1 Вам дана функция-конструктор, с помощью которой можно создавать экземпляры объектов.
Ваша задача состоит в том, чтобы переписать данную функцию на класс (class).
function Student(name, age) {
this.name = name;
this.age = age;
this.technologies = [];
this.status = 'Junior';
this.setTechnologies = function(technologies) {
this.technologies = [
...this.technologies,
...technologies,
];
}
this.setNewStatus = function(newStatus) {
  this.status = newStatus;
}
}
const student = new Student ('Maxim', 20);
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ]);
student.setNewStatus('Middle');
console.log(student);
*/

class Student {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.technologies = []
    this.status = 'Junior'
  }
  setTechnologies(technologies) {
    this.technologies = [
      ...this.technologies,
      ...technologies,
    ]
  }
  setNewStatus(newStatus) {
    this.status = newStatus
  }
}
const student = new Student ('Maxim', 20)
student.setTechnologies([ 'HTML', 'CSS', 'JavaScript' ])
student.setNewStatus('Middle')
console.log(student)

/*ex.2 Вам необходимо создать класс Person, от него мы сможем создавать экземпляры людей. Конструктор класса будет принимать 2 параметра:
1. name - имя человека
2. age - количество полных лет
Также вам необходимо реализовать метод compareAge в классе Person. Он принимает в себя экземпляр класса Person и сравнивает значения полных лет. Данный метод должен возвращать результат в следующем формате: Если у одного Person количество лет больше либо равно, чем у другого, то выводите сообщение через alert “name1 старше, чем name2”. Иначе жe   “name1 младше, чем name2”.*/

class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  compareAge(Person) {
    if (this.age > Person.age) {
      alert(`${this.name} старше, чем ${Person.name}`)
    } else if (this.age < Person.age) {
      alert(`${this.name} младше, чем ${Person.name}`)
    }
  }
}

const person1 = new Person('Максим', 24)
const person2 = new Person('Светлана', 36)
const person3 = new Person('Ирина', 23)

person1.compareAge(person2)
person2.compareAge(person3)
person3.compareAge(person1)

/* ex.3 Вам поручили задачу на проекте. Необходимо разработать словарь, в который можно добавлять слова с их описанием, удалять слова и получать их.*/

class Dictionary {
  constructor(name) {
    this.name = name
    this.words = {}
  }
  addWords(word, description) {
    if (!this.words[word]) {
      this.words[word] = {
        word,
        description,
      }
    }
  }
  removeWord(word) {
    delete this.words[word]
  }
  getWord(word) {
    return this.words[word]
  }
  showAllWords() {
    Object.values(this.words).forEach((wordItem) => {
      console.log(`${wordItem.word} - ${wordItem.description}`)
    })
  }
}

const dictionary = new Dictionary('Толковый словарь')
dictionary.addWords('JavaScript', 'популярный язык программирования')
dictionary.addWords('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
dictionary.removeWord('JavaScript')
dictionary.showAllWords()

//ex.4 Так как вы уже хорошо разобрались с технологией словаря, то вас попросили реализовать еще один словарь. Заказчик хочет создать новую категорию слов “Сложные слова”. Используйте код, написанный в прошлом задании. Вам необходимо создать дочерний класс HardWordsDictionary от класса Dictionary.

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super (name)
  }
  addWords(word, description, isDifficult) {
    if (!this.words[word]) {
      this.words[word] = {
        word,
        description,
        isDifficult: true,
      }
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.addWords('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
hardWordsDictionary.addWords('неологизм', 'Новое слово или выражение, а также новое значение старого слова.')
hardWordsDictionary.addWords('квант', 'Неделимая часть какой-либо величины в физике.')
hardWordsDictionary.removeWord('неологизм')
console.log(hardWordsDictionary.getWord('дилетант'))
hardWordsDictionary.showAllWords()

//ex.5 Ваша компания создает внутренний продукт для облегчения контроля за ростом своих разработчиков. Вам поручили задачу реализовать такой продукт.

class Developer {
  constructor(fullName, age, position) {
    this.fullName = fullName
    this.age = age
    this.position = position
    this.technologies = []
  }
  code() {}
  earnNewTechnology(technology) {
    this.technologies.push(technology)
  }
}

class JuniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Junior')
    this.technologies = ['HTML', 'CSS', 'JavaScript']
  }
  code() {
    console.log('Junior разработчик пишет код...')
  }
}

class MiddleDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Middle')
    this.technologies = ['HTML', 'CSS', 'JavaScript', 'React']
  }
  code() {
    console.log('Middle разработчик пишет код...')
  }
}

class SeniorDeveloper extends Developer {
  constructor(fullName, age) {
    super(fullName, age, 'Senior')
    this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
  }
  code() {
    console.log('Senior разработчик пишет код...')
  }
}

const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
const middleDeveloper = new MiddleDeveloper('Игорь', 25)
const seniorDeveloper = new SeniorDeveloper('Максим', 30)

juniorDeveloper.code()
middleDeveloper.code()
seniorDeveloper.code()

console.log(juniorDeveloper.fullName, juniorDeveloper.age, juniorDeveloper.position)
console.log(middleDeveloper.fullName, middleDeveloper.age, middleDeveloper.position)
console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position)


/* ex.6 В заданиях ранее вы реализовали логику для двух словарей и они работают прекрасно. Но тут к вам приходит старший разработчик и говорит, что вам необходимо использовать инкапсуляцию в вашем коде, так как это важный принцип ООП. Он вам посоветовал сделать поля name и words приватными.  Усовершенствовать код  из задания 4*/

class Dictionary2 {
  #name
  #words

  constructor(name) {
    this.#name = name
    this.#words = {}
  }

  get mainName() {
     return this.#name 
  }

  set setMainName(newName) {
    this.#name = newName
  }

  get allWords() {
    return this.#words
  }

  addNewWord(wordKey, wordObj) {
    this.#words[wordKey] = wordObj
  }

  addWord(word, description) {
    if (!this.#words[word]) {
      const newWord = {word, description,}
      this.addNewWord(word, newWord)
    }
  }

  removeWords(word) {
    delete this.#words[word]
  }

  getWords(word) {
    return this.#words[word]
  }

  showAllWord() {
    Object.values(this.#words).forEach((wordItem) => {
      console.log(`${wordItem.word} - ${wordItem.description}`)
    })
  }
}

class HardWordsDictionary2 extends Dictionary2 {
  constructor(name) {
    super (name)
  }
  addWord(word, description) {
    if (!this.allWords[word]) {
      this.addNewWord(word, {
        word,
        description,
        isDifficult: true,
      })
    }
  }
}

const hardWords = new HardWordsDictionary2('Сложные слова')
hardWords.addWord('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
hardWords.addWord('неологизм', 'Новое слово или выражение, а также новое значение старого слова.')
hardWords.addWord('квант', 'Неделимая часть какой-либо величины в физике.')
hardWords.removeWords('неологизм')
console.log(hardWords.getWords('дилетант'))
hardWords.showAllWord()
console.log(hardWords.mainName)
hardWords.setMainName = 'Новый Словарь'
console.log(hardWords.mainName)
console.log(hardWords.allWords)

/*ex.7 Ваш друг Артем является владельцем автосервиса. Сейчас все заявки на ремонт машин
обрабатывается вручную, что конечно же не очень удобно. Поэтому Артем попросил вас
как веб-разработчика помочь в автоматизации данного процесса.*/

class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
    }
  constructor(name, workingHours) {
    this.name = name
    this.workingHours = workingHours || CarService.DefaultWorkingHours
  }
  repairCar(carName) {
    if (!carName) {
      console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
    } else {
      const currentTime = new Date()
      const currentHours = currentTime.getHours()
      const workingHoursFrom = Number(this.workingHours.from.split(':')[0])
      const workingHoursTill = Number(this.workingHours.till.split(':')[0])
      if (currentHours < workingHoursFrom && currentHours >= workingHoursTill) {
        console.log('К сожалению, мы сейчас закрыты. Приходите завтра')
    } else {
      console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)
    }
  }
}
}

const carService = new CarService('RepairCarNow', { from: '8:00',
till: '20:00' })
carService.repairCar('BMW')