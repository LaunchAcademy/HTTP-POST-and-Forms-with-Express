import express from "express"
import fs from "fs";
import _ from "lodash";

import animalsRouter from "./animalsRouter.js"

import Animal from "./../models/Animal.js"

const rootRouter = new express.Router()

rootRouter.get("/", (req,res) => {
  res.redirect("/animals")
})

rootRouter.use("/animals", animalsRouter)

export default rootRouter


// const animals = [{ "id": 1, "name": "Koala", "type": "Marsupial" }, { "id": 2, "name": "Platypus", "type": "Monotreme" }, { "id": 3, "name": "Quokka", "type": "Marsupial" }, { "id": 4, "name": "Kookaburra", "type": "Bird" }, { "id": 5, "name": "Kangaroo", "type": "Mammal" }, { "id": 6, "name": "Kangaroo", "type": "Mammal" }]

// class Animal {
//   // ...

//   static findAll(){
//     const parsedAnimalData = JSON.parse(fs.readFileSync("/Users/launch-nick/work/HTTP-POST-and-Forms-with-Express/animals.json"))
//     const animals = parsedAnimalData.animals
//     return animals
//   }
// }

  // const animalData = JSON.parse(fs.readFileSync(animalsPath)).animals
  // const animals = animalData.map(animal => {
  //   return new Animal(animal)
  // })
  // return animals