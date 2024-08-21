const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Paulo Henrique",
      age: 22,
      email: "paulohsantosrocha@gmail.com"
    },
    {
      name: "Graça",
      age: "60",
      email: "graciosars@gmail.com"
    },
    {
      name: "Paulo Hernandes",
      age: "50",
      email: "paulhrs@gmail.com"
    },
    
  ]

  
  res.status(200).send(users)
})

module.exports = app