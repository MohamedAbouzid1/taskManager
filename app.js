const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const errorHandlerMiddleware = require('./middleware/error-handler')

const notFound = require('./middleware/not-found')
const port = process.env.PORT || 5000
const tasks = require('./routes/tasks')

require('dotenv').config()

// middleware
app.use(express.static('./public'))
app.use(express.json())


// routes

app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()