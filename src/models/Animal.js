import fs from "fs"
import _ from "lodash"

const animalsPath = "animals.json"

class Animal {
  constructor({ name, type }) {
    this.name = name
    this.type = type
  }

  static findAll() {
    const animalFileContents = fs.readFileSync(animalsPath)
    const parsedContents = JSON.parse(animalFileContents)
    const animalData = parsedContents.animals
    // const animalData = JSON.parse(fs.readFileSync(animalsPath)).animals
    // console.log("animals data", animalData)

    const animals = animalData.map((animal) => {
      return new Animal(animal)
    })
    // console.log("array of Animal objects", animals)
    return animals
  }

  save() {
    // "this" refers to instance of Animal that called on method `save` here
    console.log("new animal to add", this)

    // get all animals from JSON file
    const allAnimals = this.constructor.findAll()
    console.log("all animals", allAnimals)

    // add our animal, `this` to the array
    allAnimals.push(this)
    console.log("all animals after", allAnimals)

    // stringify the data so it is back in JSON data type for file
    // ensure data is formatted correctly, as object with key `animals`
    console.log("stringified", JSON.stringify({ animals: allAnimals }))
    // use fs to re-write file with the data
    fs.writeFileSync(animalsPath, JSON.stringify({ animals: allAnimals }))
  }
}

export default Animal
