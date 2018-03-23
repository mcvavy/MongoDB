const mongoose = require('mongoose');

//ES6 Promise
mongoose.Promise = global.Promise;

//Connect to the database before test runs
//This is a mocha hook
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

//Hook empty the database before every single test
//Drop the characters collection before each test
beforeEach((done) => {
    //Drop the collection
    mongoose.connection.collections.mariochars.drop(() => done());
})

