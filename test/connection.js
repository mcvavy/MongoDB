const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;

//Connect to the database before test runs
before((done) => {
    //Connect to MongoDB
    mongoose.connect('mongodb://localhost/testdb');

    mongoose.connection
        .once('open', () => { 
            console.log("Connection successful......."); 
            done(); 
        })
        .on('error', (err) => console.log('connection error', err));
});



