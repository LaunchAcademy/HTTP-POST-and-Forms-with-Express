import express from "express"

import Animal from "../models/Animal.js"

const animalsRouter = new express.Router()

animalsRouter.get("/", (req, res) => {
  console.log("rendering all animals!!")

  const allAnimals = Animal.findAll()
  res.render("index", { animals: allAnimals })
  
  // res.render("index", { animals: Animal.findAll() })
})

// animalsRouter.get("/:id", (req,res) => {
//   const id = req.params.id
// })

animalsRouter.post("/", (req, res) => {
  const animalName = req.body.name
  const animalType = req.body.type
  
  // debugger
  
  const animalObject = {name: animalName, type: animalType}
  const newAnimal = new Animal(animalObject)

  // const newAnimal = new Animal({name: animalName, type: animalType})

  // debugger
  
  newAnimal.save()

  // debugger
  
  res.redirect("/animals")
})

export default animalsRouter