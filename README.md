# Hello Books
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)]()


A simple MERN application for managing a physical books library written in ES 6 Javascript according to [AirBnB Javascript style guidelines](https://github.com/airbnb/javascript) enforced by ES Lint .
Backend is ```Node.js``` using ```Express``` as server side web framework, ```React.js``` view library for the views rendering, ```[Sequelize](http://docs.sequelizejs.com/)``` as Object relational mapper (ORM), ```Postgres SQL``` as database.


## Branches 

[express-setup](https://github.com/Adeohluwa/Hello-Books/tree/express-setup) -- initial express setup to serve our routes 

[sequelize-config](https://github.com/Adeohluwa/Hello-Books/tree/sequelize-config) -- here I configure sequelize as the ORM that wraps around the Postgres DB
  


## Instructions

- Install the latest version Node.js 
- Clone this Repository  
```git clone https://github.com/Adeohluwa/Hello-Books.git```
- Run ```npm install``` to install the required dependencies
- Run ```npm test``` to fireup the tests
- Point your browser to http://localhost:3000/


### ROAD MAP


 * Configure Sequelize as ORM
 * Install Postgresql as database
 * Setup Mocha and Chai for api tests 
 * Document API extensively using Swagger
 * Implement Front-end in React.JS
 * Design Front-End according to Material UI guidelines
 * Setup Travis CI, Hound, Coveralls, Code climate for C.I
 * Depoy to Heroku 




### License 

[MIT](LICENSE.txt)
