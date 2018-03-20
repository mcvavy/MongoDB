const mongoose = require('mongoose');

//Connect to MongoDB
mongoose.connect('mongodb://localhost/testdb');

mongoose.connection.once('open', () => console.log("Connection successful......."))
.on('error', (err) => console.log('connection error', err));

