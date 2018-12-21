var express = require('express');
var router = express.Router();
var city = require("../models/city");
var state = require("../models/state");
var country = require("../models/country");
var path = require('path');
var appRoot = path.resolve();

router.get('/loadCountry',function(req,res){
    country.find(function(err,countryData){
    if(err){
      return console.dir(err);
    }
    countryName = Object.values(countryData).map(k => k.name);
    res.send(countryName);
  })
})

router.get('/:country/loadState',function(req, res){
  country.findOne({"name":req.params.country},function(err,countryData){
    if(err){
      return console.dir(err);
    }
    state.find({"country_id": countryData.id},function(err,stateData){
      if(err){
        return console.dir(err);
      }
      stateName = Object.values(stateData).map(k => k.name);
      res.send(stateName);
    })
  })
})

router.get('/:state/loadCity',function(req, res){
  state.findOne({"name": req.params.state},function(err,stateData){
      if(err){
        return console.dir(err);
      }
      city.find({"state_id": stateData.id},function(err,cityData){
        if(err){
          return console.dir(err);
        }
        cityName = Object.values(cityData).map(k => k.name);
        res.send(cityName);
      })    
  })
})

router.get('/:city/loadZip',function(req, res){
  city.findOne({"name": req.params.city},function(err,cityData){
    if(err){
      return console.dir(err);
    }
    res.send(cityData.id);
    })    
})

module.exports = router;