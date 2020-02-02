# sample-angular-node-app
Sample application with user login and admin dashboard functionality

# Getting Started

Prerequisites-
Git
1. Angular version 8
2. Node.js and npm Node ^10.16.0, npm ^6.9.0
3. MongoDB - Keep a running daemon with mongod
4. create connection userRole under the database, sample-mean-db and run following commands:
5. command 1- db.getCollection('userRole').insert({role:'admin'})
6. command 2- db.getCollection('userRole').insert({role:'guest'})
7. check entries usiing command- db.getCollection('userRole').find({})

# Developing
1. Angular-
Run npm install to install server dependencies.

2. Backend- express
move uptil api folder
Run npm install to install dependencies.

3. MongoDB
Run mongod in a separate shell to keep an instance of the MongoDB Daemon running
create userRole connection with defalult entries as- {role: 'admin'} and {role: 'guest'}

# Run
1. To run angular app- from parent folder run command- ng serve --open
2. To run node application - from /api folder run- nodemon or npm start 

# Build & development
Run- ng build --prod

# Testing
Running npm test will run the unit tests with karma.
