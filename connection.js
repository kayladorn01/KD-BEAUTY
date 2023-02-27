require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@kdbeauty-database.rbkwu5c.mongodb.net/kdbeauty-database?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('succesfully connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
    console.log(err)
})