
# Getting started

1. Database SetUp

2. REST APIs for CRUD

3. Model creation

4. Initialsing database

5. Index Route

## Commands in the terminal

1. npm init -y
for installing package.json file
2. npm i express
for express package for backend
3. npm i ejs
to add the Embedded JavaScript templating engine as a dependency in your Node.js project, enabling you to generate dynamic HTML by embedding JavaScript directly into HTML templates
4. npm i mongoose
for dealing with databases
5. touch app.js
for creating the main js file

### Extra commands to start

1. nodemon app.js
to start the express server

#### Model : Listing

we write here what we want for the project model

1. title -> string
2. description -> string
3. image -> "url"
4. price -> number
5. location -> string
6. country -> string

so for creting a model we have to know that we are going to create multiple models so now we will create a model folder

#### Initialising Database

Here we will create a init folder and in that init folder we will store our sample data

##### Route

1. Index route
we will use get request access to listings and we will return all the listings
to get all the listings we will create a new views folder for storing all type of models
get  /listing

2. Show Route
here we perform read crud operation where it will show all the data of the title
get  /listing/:id

3. Create route
a. new route - we will get a form to create a new lsiting and when the submit button will be clicked then it will go to the cerate route
get /listing/new

b. create route - s
post /listing
