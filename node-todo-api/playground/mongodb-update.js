// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Conneced to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('58f370889ab4b6ae87bbab8b')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58f4db2a4b9d0823d845edc1')
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  });

  // db.close();
});
