import express from "express"

import Animal from "../models/Animal.js"

const animalsRouter = new express.Router()

animalsRouter.get("/", (req, res) => {
  const allAnimals = Animal.findAll()

  res.render("index", { animals: allAnimals, message: "first load! welcome!" })
  // res.render("index", { animals: Animal.findAll() })
})

animalsRouter.post("/", (req, res) => {
  // Unpack the data
  console.log("req body", req.body)
  const animalName = req.body.animalName
  const animalType = req.body.animalType
  // ES6 object destructuring shortcut
  // const { animalName , animalType } = animal

  // Optionally: validation
  if (animalName && animalType) {
    // Persist the new Animal to a database or file
    const newAnimal = new Animal({ type: animalType, name: animalName })
    console.log("new animal", newAnimal)
    newAnimal.save()

    // "Happy path"
    // Redirect to see the result
    res.redirect("/animals")
  } else {
    // "Sad path"
    console.log("sad path!!!")
    // otherwise, re-render the page so that they can try again
    res.render("index", {
      animals: Animal.findAll(),
      message: "need to supply both name and type!"
    })
  }
})

export default animalsRouter
