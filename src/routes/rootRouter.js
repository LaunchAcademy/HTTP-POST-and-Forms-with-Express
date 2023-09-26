import express from "express"

import animalsRouter from "./animalsRouter.js"

const rootRouter = new express.Router()

// rootRouter.get("/", (req,res) => {
//   res.redirect("/animals")
// })

rootRouter.use("/animals", animalsRouter)

// rootRouter.use("/tasks", tasksRouter)

export default rootRouter
