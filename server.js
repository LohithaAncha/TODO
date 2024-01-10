const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL;
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const routes = require("./routes/TodoRoute")
const errorMiddleware=require('./middlewares/errorMiddleware')





app.use(express.json());
app.use(cors())
app.use(routes)
app.use(errorMiddleware)
mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started at port ${PORT}`)
        })
        console.log("Connected to database");
    }).catch((error) => {
    console.log(error.message)
})