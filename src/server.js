const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Note = require('./models/Note');
const { title } = require('process');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://gkush2008:rsMshI6j6lU9V6r5@cluster0.v5rz1xg.mongodb.net/notes').then(function () {

    app.get('/', function (req, res) {
        //req is what we send from th frontend to this server
        //res is what we send from the server to the frontend
        res.json({
            message:"Api is working"
        });
    });

    const noteRouter=require('./routes/Note');
    app.use('/notes',noteRouter);
});

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server running on port "+PORT);
});
