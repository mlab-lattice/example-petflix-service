const mongodb = require('mongodb')
const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongodb.MongoClient.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test').then(db => {
  
  let petflix = db.collection('petflix')
  
  app.get('/videos', (req, res) =>
    petflix.find().toArray().then(data => res.send(data))
  )
  
  app.get('/random', (req, res) => {
    petflix.aggregate([{ $sample: { size: 1 } }]).toArray().then(data => {
      res.redirect(`/view/${data[0]._id}`)
    })
  })

  app.listen(process.env.PORT || 8000, () => {
    console.log('Service Started')
  })
})
