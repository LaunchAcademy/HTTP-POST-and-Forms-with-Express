import fs from "fs";
import _ from "lodash";

const animalsPath = "savedAnimals.json"

class Animal {
  constructor({ name, type }) {
    this.name = name
    this.type = type
  }

  static findAll() {
    const animalData = JSON.parse(fs.readFileSync(animalsPath)).animals

    const newAnimalsArray = animalData.map((animalObject) => {
      return new Animal(animalObject)
    })

    return newAnimalsArray
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