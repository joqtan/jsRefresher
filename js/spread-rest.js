const numbers = [1, 2, 3, 4, 5]

const newNumbers = [...numbers, 6, 7, 8]

// console.log(newNumbers)

const Person = {
  name: 'joqtan',
}

const newPerson = {
  ...Person,
  age: 25,
}

// console.log(newPerson)

const filter = (...args) => args.filter((element) => element === 1)

console.log(filter(1, 2, 3))
