var express = require('express')

var cors = require('cors')

const Unsplash = require('unsplash-js').default;

const {toJson} = require('unsplash-js')

global.fetch = require('node-fetch')


var app = express();

app.use(cors())

const unsplash = new Unsplash({
  applicationId: "c1e47c9589dd4c170d631aabd17cb23af8ec8451cf1c2f5e50af82e4e59f417c",
  secret: "326d77cb01bee84e8041db8b25a9d7843362ed28a7ef34d9477b584afbd8a40f"
});

//set up the routes for the app

app.get('/api/photos',(req,res) => {
  // make a request to the api

  const page = req.query.page || 1;

  const take = req.query.take || 30;
  
  unsplash.photos.listPhotos(page,take,"computers")
  .then(toJson)
  .then(photos => {
     // return photos to browser

     return res.json(photos)
  })

})


app.listen(8080);