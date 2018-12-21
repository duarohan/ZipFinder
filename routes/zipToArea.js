var express = require('express');
var router = express.Router();
var city = require("../models/city");
var state = require("../models/state");
var country = require("../models/country");
var path = require('path');
var appRoot = path.resolve();

router.get('/:zipcode',function(req, res){
  city.findOne({"id": req.params.zipcode},function(err,cityData){
    if(err){
      return console.dir(err);
    }
    state.findOne({"id":cityData.state_id},function(err,stateData){
      if(err){
        return console.dir(err);
      }
      country.findOne({"id":stateData.country_id},function(err,countryData){
        if(err){
          return console.dir(err);
        }
        res.send(`${cityData.name},${stateData.name},${countryData.name}`)
      })
    })
  })
})

module.exports = router;