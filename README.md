# weather-application-real-time
This a weather application build using nodejs libraries like expressJS , ejs , dotenv , nodemon , request , router , body-parser , css  and weatherstack API.
In this application, you can the weather condition of any place around the world. you can get the wind-speed, cloud cover , humidity , temparature and time either daytime or nighttime. 
modules explanation
## Express. js - is a free and open-source web application framework for Node. js. It is used for designing and building web applications quickly and easily.
## ejs -  a simple and powerful templating engine that generates HTML markup from JavaScript quickly and easily.
## dotenv - dotenv allows you to separate secrets from your source code eg API keys , passwords and any other sensitive information
## nodemon - used for restarting the node application when file changes in the directory are detected.
## body-parser - Body-parser is the Node.js body parsing middleware. It is responsible for parsing the incoming request bodies in a middleware before you handle it.
## request -  The request module is used to make HTTP calls.
## router -  Express Router is a built-in class that refers to how an application’s endpoints (URIs) respond to client requests.
## css - CSS is the language we use to style an HTML document or an ejs document.
## weatherstack API - eatherstack is a RESTful API service that allows customers to query current, historical, and forecast weather for as many worldwide locations as possible.
You can install these modules using npm install.
To run the application , connect your server to any port of your choice eg 3000 or 8080 and you are ready to go.
Then run using npm start or nodemon weather.js or node weather.js.
After running the application .All you need is to enter the place/city of your choice on the browser.

## RESULTS
After running the application you will be directed to a page like(index.ejs_webpage) in the browser where you will enter a city/place of your choice around the world as shown in (index.ejs_query1_image and index.ejs_query2_image).
To get the weather conditions of that place, click on "get weather" button  and the results  will be displayed as shown in (index.ejs_results1_image and index.ejs_results2_image).
