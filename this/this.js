//ex:1
const student = {
  stack: ['HTML'],
  level: 1,
  improlevel() {
    this.level += 1
    if (this.level === 2) {
      this.stack.push('CSS')
    } else if (this.level === 3) {
      this.stack.push('JavaScript')
    } else if (this.level === 4) {
      this.stack.push('React')
    } else if (this.level === 5) {
      this.stack.push('NodeJS')
    } else {
      alert('Студент выучил все технологии!')
      console.log(this)
    }
    return this
  }
}

console.log(student.improlevel()
.improlevel()
.improlevel()
.improlevel()
)

//ex:2
const dog = {
  name: 'Чарли',
  type: 'Собака',
  makeSound() {
    return 'Гав-Гав'
  }
}
const bird = {
  name: 'Петя',
  type: 'Воробей',
  makeSound() {
    return 'Чик-чирик'
  }
}

function  makeDomestic (isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`)
  return {
    ...this,
  isDomestic,
}
}

const soundBird = makeDomestic.call(bird, false)
console.log('soundBird', soundBird)
const soundBird1 = makeDomestic.apply(bird, [false])
console.log('soundBird1', soundBird1)
const soundDog = makeDomestic.bind(dog, true)()
console.log('soundDog', soundDog)

//ex:3
const footballer = {
  fullName: 'Cristiano Ronaldo',
  attack() {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`)
  },
  scoreGoal(sound) {
    console.log(`${this.fullName} забил гол! Вот это да!`)
    this.celebrate(sound)
  },
  celebrate(sound) {
    console.log(sound)
  },
  goToSubstitution: function(newPlayer) {
    console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`)
  }
}

const attack = footballer.attack
const score = footballer.scoreGoal
const substitute = footballer.goToSubstitution
attack.bind(footballer)()
score.call(footballer, 'Урааа')
substitute.apply(footballer, ['Paulo Dibala'])

//ex: 4 
const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin(defender) {
    const attackerValues = Object.values(this)
    const defenderValues = Object.values(defender)
    let chancesCounter = 0
    attackerValues.forEach((value, index) => {
      if (value > defenderValues[index] && typeof value === 'number') {
        chancesCounter += 1
      }
    })
    return [chancesCounter, defenderValues.length]
  },
  improveArmy() {
    Object.entries(this).forEach((item) => {
      const key = item[0]
      const value = item[1]
      if (typeof value === 'number') {
        this[key] = value + 5
      }
    })
  },
  attack(defender) {
    const chancesValues = this.checkChancesToWin(defender)
    const ourArmyChances = chancesValues[0]
    const seventyPercentChances = Math.round(chancesValues[1] * 70 / 100)
    if (ourArmyChances < seventyPercentChances) {
      alert(`Наши шансы равны ${ourArmyChances}/${chancesValues[1]}.Необходимо укрепление!`)
      this.improveArmy()
    } else {
      alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!')
    }
  }
}

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
}

attacker.attack(defender)
attacker.attack(defender)
attacker.attack(defender)

