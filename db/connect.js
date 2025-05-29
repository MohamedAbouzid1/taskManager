const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://mohamed905:Samamixsamamix11@nodeexpressprojects.4adpgy7.mongodb.net/TaskManager?retryWrites=true&w=majority&appName=NodeExpressProjects'

const connectDB = (url) => {
    console.log('Connecting to the database...')
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

module.exports = connectDB

