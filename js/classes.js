// class Human {
//   constructor() {
//     this.gender = 'female'
//   }

//   printGender() {
//     console.log(this.gender)
//   }
// }
class Human {
  gender = 'female'

  printGender = () => {
    console.log(this.gender)
  }
}

// class Person extends Human {
//   constructor() {
//     super()
//     this.name = 'joqtan'
//     this.gender = 'male'
//   }
//   printMyName() {
//     console.log(this.name)
//   }
// }
class Person extends Human {
  name = 'joqtan'
  gender = 'male'

  printMyName = () => {
    console.log(this.name)
  }
}

const person = new Person()

person.printMyName()

person.printGender()
