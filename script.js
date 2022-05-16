let names = ['Мадам Нациу', 'Баронесса Финч', 'Доктор Марколла', 'Леди Уинслоу', 'Графиня Конти']
let colors = ['красное', 'зелёное', 'пурпурное', 'синее', 'белое']
let country = ['Фрейпорт', 'Морли', 'Бейлтон', 'Серконос', 'Дануолл']
let drink = ['виски', 'коктейль', 'ром', 'сидр', 'абсент']
let treas = ['Перстень', 'Бриллиант', 'Орден', 'Портсигар', 'Кулон с птицей']

let counter = 0;

let span1 = document.getElementsByClassName('1')
let span2 = document.getElementsByClassName('2')
let span3 = document.getElementsByClassName('3')
let span4 = document.getElementsByClassName('4')
let span5 = document.getElementsByClassName('5')

let button = document.querySelector('button')

let name1 = document.querySelector('select[name="name1"]')
let name2 = document.querySelector('select[name="name2"]')
let name3 = document.querySelector('select[name="name3"]')
let name4 = document.querySelector('select[name="name4"]')
let name5 = document.querySelector('select[name="name5"]')

let treas1 = document.querySelector('select[name="treas1"]')
let treas2 = document.querySelector('select[name="treas2"]')
let treas3 = document.querySelector('select[name="treas3"]')
let treas4 = document.querySelector('select[name="treas4"]')
let treas5 = document.querySelector('select[name="treas5"]')

let vseSpan1 = Array.from(span1)
let vseSpan2 = Array.from(span2)
let vseSpan3 = Array.from(span3)
let vseSpan4 = Array.from(span4)
let vseSpan5 = Array.from(span5)

Array.prototype.rand = function() {
  let value =  this[Math.floor(Math.random() * this.length)]
  let index = this.indexOf(value)
  this.splice(index, 1)
  return value
}

class Person {
  constructor(names, colors, country, drink, treas) {
    this.names = names;
    this.colors = colors;
    this.country = country;
    this.drink = drink;
    this.treas = treas;
  }
}

let first = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())
let second = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())
let third = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())
let fourth = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())
let fifth = new Person (names.rand(), colors.rand(), country.rand(), drink.rand(), treas.rand())

vseSpan1[0].textContent = `${first.names}`
vseSpan1[1].textContent = `${first.country}`
vseSpan1[2].textContent = `${first.colors}`
vseSpan1[3].textContent = `${first.country}`
vseSpan1[4].textContent = `${first.treas}`
vseSpan1[5].textContent = `${first.drink}`
vseSpan1[6].textContent = `${first.treas}`

vseSpan2[0].textContent = `${second.colors}`
vseSpan2[1].textContent = `${second.treas}`
vseSpan2[2].textContent = `${second.country}`
vseSpan2[3].textContent = `${second.names}`
vseSpan2[4].textContent = `${second.drink}`
vseSpan2[5].textContent = `${second.treas}`

vseSpan3[0].textContent = `${third.names}`
vseSpan3[1].textContent = `${third.colors}`
vseSpan3[2].textContent = `${third.country}`
vseSpan3[3].textContent = `${third.treas}`
vseSpan3[4].textContent = `${third.drink}`
vseSpan3[5].textContent = `${third.treas}`

vseSpan4[0].textContent = `${fourth.colors}`
vseSpan4[1].textContent = `${fourth.colors}`
vseSpan4[2].textContent = `${fourth.drink}`
vseSpan4[3].textContent = `${fourth.names}`
vseSpan4[4].textContent = `${fourth.country}`
vseSpan4[5].textContent = `${fourth.treas}`

vseSpan5[0].textContent = `${fifth.colors}`
vseSpan5[1].textContent = `${fifth.names}`
vseSpan5[2].textContent = `${fifth.treas}`
vseSpan5[3].textContent = `${fifth.country}`
vseSpan5[4].textContent = `${fifth.drink}`

console.log(first)
console.log(second)
console.log(third)
console.log(fourth)
console.log(fifth)

function isTrue() {
  if (name1.value == first.names && name2.value == second.names && name3.value == third.names && name4.value == fourth.names && name5.value == fifth.names) {
    if (treas1.value == first.treas && treas2.value == second.treas && treas3.value == third.treas && treas4.value == fourth.treas && treas5.value == fifth.treas) {
      alert('Верно! Кодовое слово: Зигота')
      return true
    }
  } else {
    alert('Неверно!')
    return false
  }
}

button.addEventListener('click', isTrue)

alert('При закрытии/перезагрузке вкладки с загадкой, все ее исходные данные изменятся и решать ее придется сначала. Не подглядывайте! Я вас предупредил.')