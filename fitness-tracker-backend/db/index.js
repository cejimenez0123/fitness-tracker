const {PrismaClient } = require("@prisma/client")
const  cors = require('cors');

const express = require('express')
const app = express()
const port = 5173

const prisma = new PrismaClient()
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.listen(port, () => {
    console.log(`welcome to port ${port}`)
  })
module.exports = prisma;