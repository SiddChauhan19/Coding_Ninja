const mongoose = require('mongoose');
const DB = ('mongodb+srv://siddhant1952000:68BTri59u2HvZqrV@cluster0.qrevhll.mongodb.net/?retryWrites=true&w=majority');


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
// error
db.on('error', console.error.bind(console, 'erroe connecting to db'));
// up and running then message
db.once('open', function () {
    console.log('Success fully connected to the database')
});