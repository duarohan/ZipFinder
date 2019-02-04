var request = require('request');

//This is a Test Unit
describe("cityToZip", () => {
    // //This is a Test suite for Correctness of the data
    // describe("Data returned from each API is in correct format",()=>{
    //     //This is a Test Spec
    //     it("Countries are returned in an Array", ()=>{
    //         expect().toContain(true);
    //     })    
    //     //This is a Test Spec
    //     it("States are returned in an Array", ()=>{
    //         expect().toEqual(true);
    //     })
    //     //This is a Test Spec
    //     it("Cities are returned in an Array", ()=>{
    //         expect().toEqual(true);
    //     })
    //     it("ZipCode is returned as a value", ()=>{
    //         expect().toEqual(true);
    //     })
    // })
    //This is a Test suite to get correct count
    var countriesCount = 245;
    var countryURL = "http://localhost:3000/cityToZip/loadCountry";
    var stateCountAfghanistan = 32;
    var stateURL = "http://localhost:3000/cityToZip/Afghanistan/loadState";
    var cityCountBadakhshan = 5 ;
    var cityURL = "http://localhost:3000/cityToZip/Afghanistan/Badakhshan/loadCity"
    var zipCodeEshkashem = 5909;
    var zipURL = "http://localhost:3000/cityToZip/Afghanistan/Badakhshan/Eshkashem/loadZip"

    request(countryURL, function (response) {
        console.log(response);
    });

    describe("Correct Amount of values are returned",()=>{
        //This is a Test Spec
        //var countryCountSpec = router.get(countryURL)
        request(countryURL, function (error, response, body) {
            console.log(response);
        });
        var countryCountSpec = 244;
        //console.log(countryCountSpec);
        it("Countries returned should be 245", ()=>{
            expect(countryCountSpec).toEqual(countriesCount);
        })    
        //This is a Test Spec
        var stateCountSpec = router.get(stateURL).length();
        it("States count in Afghanistan should be 32", ()=>{
            expect(stateCountSpec).toEqual(stateCountAfghanistan);
        })
        //This is a Test Spec
        var cityCountSpec = router.get(cityURL).length();
        it("Cities count in Badakhshan should be 5", ()=>{
            expect(cityCountSpec).toEqual(cityCountBadakhshan);
        })
        //This is a Test Spec
        var zipCodeSpec = router.get(zipURL);
        it("ZipCode is returned as a value", ()=>{
            expect(zipCodeSpec).toEqual(zipCodeEshkashem);
        })
    })
});