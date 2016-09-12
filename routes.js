const fetch = require('isomorphic-fetch');


var logic = function(req, res) {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json?address='
  const query = req.query.location
  console.log(query);
  fetch(url + query)
  .then(r => r.json())
  .then(resp => {
    const lat = resp.results[0].geometry.location.lat
    const lng = resp.results[0].geometry.location.lng
    console.log(lat, lng);
    return fetch('https.//api.instagram.com/v1/media/search?lat='+lat+'&lng='+lng+'&client_')
    res.send('hello world');
  })
};

module.exports = function(app, express) {
  const router = express.Router();

  router.get('', logic);

  return router;
};