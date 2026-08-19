import express from 'express'
import dotenv from 'dotenv/config'
import dbConnect from './db/dbConnect.js'
import movieRoutes from './routes/movieRoutes.js'
import cors from 'cors'
import dns from 'dns'

dns.setServers(['8.8.8.8', '8.8.4.4'])

const app = express()
const PORT = process.env.PORT || 3000

//Connection to Database
dbConnect()

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/movies', movieRoutes)

// Custom Error Handlers

// Server Start
app.listen(PORT, () => {
    console.log(`Server Started On Port : ${PORT}`)
})
