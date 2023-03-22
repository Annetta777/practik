//Форма авторизации и регистрации
const existedUserLogin = 'dron_udon'
const existedUserPassword = 'XyZ@45'
let userLogin = prompt('Enter login')
userLogin = userLogin.trim()
let userPassword = prompt('Enter password')
userPassword = userPassword.trim()
 if (existedUserLogin === userLogin) alert (`Welcome, ${userLogin}`)
 else alert( 'Login and (or) password entered incorrectly')
