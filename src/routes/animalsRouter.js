import express from "express"
import fs from "fs";
import _ from "lodash";

import Animal from "../models/Animal.js"

const animalsPath = "savedAnimals.json"

const animalsRouter = new express.Router()

animalsRouter.get("/", (req, res) => {
  // const animalData = fs.readFileSync(animalsPath)
  // const parsedAnimals = JSON.parse(animalData)
  // const animals = parsedAnimals.animals

  const animals = Animal.findAll()

  res.render("animalsList", { animals: animals })
})

animalsRouter.post("/", (req, res) => {

  // 1. get the data
  const name = req.body.animalName
  const type = req.body.animalType

  const newData = {name: name, type: type }

  const newAnimal = new Animal(newData)
  newAnimal.save()

  // const allAnimals = JSON.parse(fs.readFileSync(animalsPath)).animals

  // allAnimals.push(newData)


  // // 2. save the data
  // fs.writeFileSync(animalsPath, JSON.stringify({animals: allAnimals} ))



  // 3. tell the webpage what to do next...redirect
  res.redirect("/animals")
})














// animalsRouter.post("/", (req, res) => {
//   // Unpack the data 
//   const animalName = req.body.animalName
//   const animalType = req.body.animalType
//   // ES6 object desctructuring shortcut
//   // const { animalName , animalType } = animal 

//   // Optionally: validation 
//   if (animalName && animalType) {

//     // Persist the new Animal to a database or file
//     const newAnimal = new Animal({ name: animalName, type: animalType })
//     newAnimal.save()

//     // Redirect to see the result 
//     res.redirect("/animals")

//   } else {

//     // otherwise, re-render the page so that they can try again 
//     res.render("index", { animals: Animal.findAll() })
//   }
// })

export default animalsRouter