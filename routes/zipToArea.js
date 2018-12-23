var express = require('express');
var router = express.Router();
var zipcodes = require('zipcodes');


router.get('/:zipcode',function(req, res){
  console.log();
  if (isNaN(req.params.zipcode)){
    res.json("Please enter a valid number")
  }else{
    var zip = Number(req.params.zipcode);
    var data = zipcodes.lookup(zip);
    if (typeof(data) == "undefined"){
      res.json("Zip Code not listed with us")
    }
    else{
      res.json(`The zip code entered is of the area --> ${data.city},${data.state},${data.country}`)
    }
  }

  
})

module.exports = router;