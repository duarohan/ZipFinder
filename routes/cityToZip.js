var express = require('express');
var router = express.Router();
var city = require("../models/city");
var state = require("../models/state");
var country = require("../models/country");
var path = require('path');
var appRoot = path.resolve();

//Callback HELL!!
// router.get('/loadCountry',function(req,res){
//     country.find(function(err,countryData){
//     if(err){
//       return console.dir(err);
//     }
//     countryName = Object.values(countryData).map(k => k.name);
//     res.send(countryName);
//   })
// })
//Implement the above using Promises
router.get('/loadCountry',function(req,res){
    country.find()
    .then(function(countryData){
      countryName = Object.values(countryData).map(k => k.name);
      res.send(countryName);
      return countryName;
    })
    .catch(function(err){
      if(err){
        return console.dir(err);
      }
    })      
  })

router.get('/:country/loadState',function(req, res){
  country.findOne({"name":req.params.country})
  .then(function(countryData){
    state.find({"country_id": countryData.id})
    .then(function(stateData){
      stateName = Object.values(stateData).map(k => k.name);
      res.send(stateName);
      return stateName;
    })
    .catch(function(err){
      if(err){
        return console.dir(err);
      }
    })
  .catch(function(err){
    if(err){
      return console.dir(err);
    }
  })
  })
})

router.get('/:country/:state/loadCity',function(req, res){
  country.findOne({"name":req.params.country})
    .then(function(countryData){
      state.findOne({"country_id": countryData.id,"name": req.params.state})
      .then(function(stateData){
        city.find({"state_id": stateData.id})
        .then(function(cityData){
          cityName = Object.values(cityData).map(k => k.name);
          res.send(cityName);
          return cityName;
        })
        .catch(function(err){
          if(err){
          return console.dir(err);
          }  
        })
      .catch(function(err){
      if(err){
        return console.dir(err);
        }
      })
    .catch(function(err){
      if(err){
        return console.dir(err);
        }
      })
    })
  })
})

router.get('/:country/:state/:city/loadZip',function(req, res){
  country.findOne({"name":req.params.country})
  .then(function(countryData){
    state.findOne({"country_id": countryData.id,"name": req.params.state})
    .then(function(stateData){
      city.findOne({"state_id":stateData.id,"name": req.params.city})
      .then(function(cityData){
        res.send(cityData.id);
        return cityData.id;
      })
      .catch(function(err){
        if(err){
          return console.dir(err);
        }
      })
    .catch(function(err){
      if(err){
        return console.dir(err);
      }
    })
  .catch(function(err){
    if(err){
      return console.dir(err);
    }
    })
  })
})
})

module.exports = router;