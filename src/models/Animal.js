import fs from "fs";
import _ from "lodash";

const animalsPath = "animals.json"

class Animal {
  constructor({ name, type }) {
    // this.id = id
    this.name = name
    this.type = type
  }

  static findAll() {
    const animalData = JSON.parse(fs.readFileSync(animalsPath)).animals
    const formalAnimalObjectArray = animalData.map((animal) => {
      return new Animal(animal)
    })

    // const formalAnimalObjectArray = []
    // animalData.forEach((animal) => {
    //   const newAnimal = new Animal(animal)
    //   formalAnimalObjectArray.push(newAnimal)
    // })

    return animalData
  }

  // static getNextAnimalId() {
  //   const maxAnimal = _.maxBy(this.findAll(), animal => animal.id)
  //   return maxAnimal.id + 1
  // }

  save() {
    // this.id = this.constructor.getNextAnimalId()
    const animals = this.constructor.findAll()
    animals.push(this)
    fs.writeFileSync(animalsPath, JSON.stringify({ animals: animals }))
  }
}

export default Animal;