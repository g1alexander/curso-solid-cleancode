(()=>{
  type Gender = 'M' | 'F'
  
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthDate: Date
    ){}
  }

  const person = new Person('John', 'M', new Date('1990-01-01'))
  console.log(person)
})()