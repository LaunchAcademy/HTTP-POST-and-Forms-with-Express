import express from "express"

import Animal from "../models/Animal.js"

const animalsRouter = new express.Router()

animalsRouter.get("/", (req, res) => {

  const allAnimals = Animal.findAll()

  res.render("index", { animals: allAnimals })
})

animalsRouter.post("/newAnimalPath", (req, res) => {
  // Unpack the data with req.body
  const animalName = req.body.animalName 
  const animalType = req.body.animalType

  // Persist the new Animal to a database or file
  const newAnimal = new Animal({name: animalName, type: animalType})
  newAnimal.save()

  res.redirect("/animals")
})

export default animalsRouter