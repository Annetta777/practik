//ex.1 Часто мы записываем даты в следующем формате “день.месяц.год”
function getDateFormat (date, separator = '.') {
  let dateItem = date.getDate()
  if (dateItem < 10) {
    dateItem = '0' + dateItem
  }
  let month = date.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  }
  const year = date.getFullYear()
  const dateArray = [dateItem, month, year]
  return dateArray.join(separator)
}
console.log(getDateFormat(new Date()))
// ex.2 getDaysBeforeBirthday
const nextBirthdayDate = new Date(2023, 10, 21)
function getDaysBeforeBirthday (nextBirthdayDate) {
  const todayDate = new Date()
  const msToDay = nextBirthdayDate - todayDate
  const convertMsToDays = Math.round(msToDay / 1000 / 60 / 60 / 24)
  return convertMsToDays
}
console.log(getDaysBeforeBirthday(nextBirthdayDate))
// ex.3 
const date = new Date()
const convertDaysToMs = (days) => days * 24 * 60 * 60 * 1000
function addDays (date, days = 1) {
  return new Date(date.getTime() + convertDaysToMs(days))
}
const newDate = addDays(date, 10)
console.log(newDate)
// ex.4 
const peopleWithVisa = [
  {
      firstName: 'Stasia',
      lastName: 'Ward',
      criminalRecord: true,
      passportExpiration: '19.06.2024',
  },
  {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2021',
  },
  {
      firstName: 'Leighann',
      lastName: 'Scott',
      criminalRecord: true,
      passportExpiration: '31.07.2024',
  },
  {
      firstName: 'Nick',
      lastName: 'Pop',
      criminalRecord: false,
      passportExpiration: '31.12.2021',
  },
];

const allowVisa = (people) => {
  return people.filter((person) => {
      const expirationDate = person.passportExpiration.split('.')
      const year = expirationDate[2]
      const month = expirationDate[1]
      const date = expirationDate[0]
      const passportExpirationDate = new Date(year, month - 1, date)
      console.log('passportExpirationDate', passportExpirationDate)
      if ((passportExpirationDate.getTime() > Date.now()) && !person.criminalRecord) {
          return true
      }

      return false
  })
}
const result = allowVisa(peopleWithVisa)
console.log('result', result)