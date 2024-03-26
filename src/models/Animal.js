import fs from "fs"
import _ from "lodash"

const animalsPath = "animals.json"

class Animal {
  // constructor(animalDataObject) {
  //   this.name = animalDataObject.animalName
  //   this.type = animalDataObject.animalType
  // }
  constructor({ name, type }) {
    this.name = name
    this.type = type
  }

  static findAll() {
    const animalsJSON = fs.readFileSync(animalsPath)
    const parsedAnimalData = JSON.parse(animalsJSON)

    // const animals = []
    // parsedAnimalData.animals.forEach(animalObject => {
    //   animals.push(new Animal(animalObject))
    // })

    const animals = parsedAnimalData.animals.map(animalObject => {
      return new Animal(animalObject)
    })

    return animals
  }

  save() {
    const allAnimals = Animal.findAll()
    allAnimals.push(this)
    const animalsData = { animals: allAnimals }
    const updatedAnimalsJSON = JSON.stringify(animalsData)
    fs.writeFileSync(animalsPath, updatedAnimalsJSON)
  }
}

export default Animal
