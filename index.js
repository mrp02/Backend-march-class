const express = require('express')
require('dotenv').config();
let port = process.env.PORT || 8000
const userRouter = require('./Routes/User.routes');
// const authMiddleware = require('./Middlewares/authMiddleware');
// let uri = process.env.MONGODB_URI;
let uri = "mongodb+srv://patrickolamide005:facebook33@cluster0.l07fkwl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const cors = require('cors')
const mongoose = require('mongoose');
const app = express();


app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use("/students", userRouter);
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.listen(port, () => {
    mongoose.connect(uri)
        .then(() => {
            console.log('Working perfectly');
        })
        .catch((err) => {
            console.error(err);
        })
});






