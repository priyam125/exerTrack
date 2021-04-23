const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send('On home')
});

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('open', () => {
    console.log("Datababse connection established");
})


const exercisesRoute = require("./routes/exercises");
const usersRoute = require("./routes/users");


app.use("/exercises", exercisesRoute);
app.use("/users", usersRoute);
 


app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});
