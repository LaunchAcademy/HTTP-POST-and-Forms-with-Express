import express from "express"
import fs from "fs"

import Animal from "../models/Animal.js"

const animalsRouter = new express.Router()

animalsRouter.get("/", (req, res) => {
  const animals = Animal.findAll()

  res.render("index", { animalsArray: animals })
})

animalsRouter.post("/banana", (req, res) => {
  // Unpack the data
  console.log("req body", req.body)

  // create an animal object 
  const newAnimal = new Animal({ name: req.body.animalName, type: req.body.animalType })
  newAnimal.save()
  // call its save method 
  res.redirect("/animals")
})

export default animalsRouter
