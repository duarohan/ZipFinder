# ZipFinder

Develop web app to  fetch address from  zip code and vice versa

##Home Page Details : 
> Create a homepage which will have two buttons as "Find Zip" and "Find Address".
> Clicking on "Find Zip" will redirect to page 2.
> Clicking on "Find Address" will redirect to page 3.             

##Page 2 Details:
> There will be 3 dropdown as "country", "state", "city" and button as "GO"
> State field will get populated when user select the option from the country field and same for city
> For Country, state, city and zip code, you can hard code the values in database.
> On Click of "GO" , the form should fetch zip code from database and display.


##Page 3 Details:
> There will be a text field for "zip code"(validate the field to accept only number) and "Go" button.
> On click of "GO" button, the zip should be converted to address. 
> For this, you need to use any available npm package to covert zip to address.

------------------------------------------------------------------------------
1. Create Json file for 3 dbs from https://github.com/hiiamrohit/Countries-States-Cities-database
2. Create models(db schmeas) city,country,state.
3. Create mongo clusters in mongoDB Atlas and create config/db.js and load Json files to respective dbs.
4. Create the app.js and mention the routes.
5. Write CRUD operations for cityToZip and ZipToArea.
6. Created 5 APIs -'cityToZip/loadCountry','cityToZip/:country/loadState','cityToZip/:state/loadCity','cityToZip/:city/loadZip','zipToArea/:zipcode'
7. Tested ZipToArea and cityToZip APIs
8. Installed Angular to the project to develop the frontEnd screen.


##Instructions to Run

1. Git pull
2. npm install
3. ng build on the view folder
4. hit nodemon, start using APIs on localhost:3000
5. ng serve, to lauch the application on localhost:4200

