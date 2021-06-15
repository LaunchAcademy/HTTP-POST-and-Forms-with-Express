import express from "express"

import Animal from "../models/Animal.js"

const animalsRouter = new express.Router()

animalsRouter.get("/", (req, res) => {

  const allAnimals = Animal.findAll()

  res.render("index", { animals: allAnimals })
  // res.render("index", { animals: Animal.findAll() })
})


animalsRouter.post("/", (req, res) => {
  // Unpack the data 
  const animalName = req.body.animalName
  const animalType = req.body.animalType
  // ES6 object desctructuring shortcut
  // const { animalName , animalType } = animal 

  // Optionally: validation 
  if (animalName && animalType) {

    // Persist the new Animal to a database or file
    const newAnimal = new Animal({ name: animalName, type: animalType })
    newAnimal.save()

    // Redirect to see the result 
    res.redirect("/animals")

  } else {

    // otherwise, re-render the page so that they can try again 
    res.render("index", { animals: Animal.findAll() })
  }
})

export default animalsRouter