const mongoose = require('mongoose');

const DB = ("mongodb+srv://siddhant1952000:VdRZPiXH61tq2gMp@cluster0.rfax1ti.mongodb.net/?retryWrites=true&w=majority");

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind('Error connecting to the DB'));

db.once('open', () => {
  console.log('Sucessfully connected to the DB');
})