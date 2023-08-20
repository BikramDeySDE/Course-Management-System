# Course-Management-System
Course Management System Application using NodeJS (ExpressJS) and MongoDB

# Steps
Folder -----> REST-APIs-With-ExpressJS-and-MongoDB >> 

new terminal ---> 
i) 	cd REST-APIs-With-ExpressJS-and-MongoDB (Enter)
ii)	npm init -----> create new project
iii)	npm install express nodemon body-parser dotenv mongoose	------> package-lock.json folder will becreated and these packages will be installed
	
	express		:	for node.js framework
	nodemon		:	for auto restarting projects after updating any of the codes
	body-parser	:	for converting into json (parse the body to json)
	dotenv		:	for using .env file (keeping all constants like PORT etc in the .env file and accessing them in the main code)
	mongoose	:	for connecting with MongoDB

iv)	Create a file index.js (you can name it as app.js as well)
v)	package.json > "script" > "start" : "nodemon index.js"	--------> now you can start your project by typing "npm start" in the terminal '.....\REST-APIs-With-ExpressJS-and-MongoDB>'

vi)	index.js > create a server, a dummy request and check if the server is working fine or not
	
	index.js
	// importing packages
	const express= require('express');  // for express framework


	// creating object of 'express'
	const app = express();

	// dummy get request
	app.get("/",(req,res)=>{
	    res.send("your server is running well !!");
	})

	// listening
	app.listen(2000,()=>{                   // if server successfully on the given port, the callback function will run
	    console.log("server started successfully!!");   
	})	


vii)	create a folder routes > create a file courses.js ---> here we will create all the routes (all requests)
viii)	create '.env' file and keep the key-value pairs here like (PORT=2000), and to access them in a particular file, in that particular file you need to configure 'dotenv' package
						
	like I want to access the PORT written in .env file in the 'index.json' file, then in 'index.json' file, I need to write to configure 'dotenv' package :
	-> require('dotenv').configure()
	and to access the PORT :
	-> process.env.PORT

ix)	connect to DB
	in index.js file
	-> import the package 'mongoose'
	-> before listening, add : mongoose.connect({db-url},{callback-function})
x)	create a new folder 'models' and a new file 'course'
			
	








* callback is depricated for some functions in mongoose --> mongoose-stopped-accepting-callbacks-for-some-of-its-functions : if we still want to use, we need to use async-await
so we can write without a callback :
-> mongoose.connect(process.env.DB_CONNECTION_URL);
or we can use async-await in case we want to write a callback
-> 
	const connectToMongo = async () => {
	  await mongoose.connect(process.env.MONGO_URL);
	  console.log("Connected to MongoDB");
	};

	connectToMongo();

(NOT SURE ABOUT THIS SOLUTION : NEED TO FIND THE PROPER SOLUTION)



** you can install thunder-client to fire different requests, it is an extension in the vs-code, it is like Postman
