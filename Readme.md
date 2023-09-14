
# Node.js CRUD API Documentation

This Node.js CRUD API project is designed to provide a simple and flexible way to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource. This documentation will guide you through setting up, using, and understanding the API.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Database](#database)
  - [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [UML Diagram](#uml-diagram)
- [Documentation](#documentation)

## Introduction

This Node.js CRUD API project is designed to provide a simple and flexible way to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource.

## Features


- CRUD Operations
- UML Diagram
- Automated test script

## Getting Started



### Prerequisites


Before you begin, ensure you have the following installed on your system:


- Node.js - Download and install Node.js from nodejs.org.

### Installation / Setup


##### 1. Clone the Github repo

```bash
git clone https://github.com/Obianuju-Sunday/Hng-Backend-2.git
```
##### 2. From your terminal navigate to the project folder
```
cd /Backend-2
```
##### 3. Install Dependencies
* Run npm install to install all dependencies

```
npm install
```
##### 4. Start the server
```
npm start
```

The server should be running on 
```
http://localhost:3000
```


# Usage
## Database

### MongoDB Database
This API uses a MongoDB database by default. If you want to use a different database, make sure to configure it accordingly. Open the .env file and set the following variables:
```
DB_URL: URL of your database connection.
```

### API Endpoints
### Create
Endpoint:  POST /api/post

Description: Adds a new person to the database.

Request Body:
```
{
  "name": "string",
  "email": "string",
}
```
 Expected Result: 

The new person is created, and you will receive a JSON response with the person's details including the time created and the unique id.

### Read
Endpoint:  GET /api/

Description: Gets details of every person in the database.

Example:
```
GET http://localhost:3000/api/
```
Expected Result: 

You will receive a JSON response with every person's information.

### Read
Endpoint:  GET /api/:user_id

Description: Gets details of a single person by id.

Example:
```
GET http://localhost:3000/api/user_id
```
Expected Result: 

You will receive a JSON response with the person's information.

### Update
Endpoint: PATCH /api/:user_id

Description: Modify details of an existing person by id.
```
{
  "name": "string",
  "email": "string"
}
```

Expected Result: 

The person's details are updated, and you will receive a confirmation message.


### Delete
Endpoint: DELETE /api/:user_id

Description: Removes a person by id.

Example:
```
DELETE http://localhost:3000/api/user_id
```

Expected Result: 
You will get a message that the person with that id has been deleted from the database.

### Testing Script
#### Script to create a new person
```
// Test script for creating a person
pm.test("Status code is 200 Created", function () {
    pm.response.to.have.status(200);
});

pm.test("Response body is valid json", function () {
    pm.response.to.be.json;
});
```
#### Response from postman
PASS
  ----------Status code is 200 Created

PASS
----------Response body is valid json


#### Script to get every person in the database
```
// Test script for getting every person
pm.test("Status code is 200 Created", function () {
    pm.response.to.have.status(200);
});

pm.test("Response body is valid json", function () {
    pm.response.to.be.json;
});
```
#### Response from postman
PASS
  ----------Status code is 200 Created

PASS
----------Response body is valid json

#### Script to get a single person by id 
```
// Test script to get a single person by id 
pm.test("Status code is 200 Created", function () {
    pm.response.to.have.status(200);
});

pm.test("Response body is valid json", function () {
    pm.response.to.be.json;
});
```
#### Response from postman
PASS
  ----------Status code is 200 Created

PASS
----------Response body is valid json


#### Script to update details of new person
```
// Test script for updating a person
pm.test("Status code is 200 Created", function () {
    pm.response.to.have.status(200);
});

pm.test("Response means user details has been updated", function () {
    pm.response.to.be.json;
});

```
#### Response from postman
PASS
  ----------Status code is 200 Created

PASS
----------Response means user details has been updated

#### Script to delete a person
```
// Test script for deleting a person by ID
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});

pm.test("Response message indicates successful deletion", function () {
    pm.expect(pm.response.text()).to.include("Deleted");
});
```
#### Response from postman
PASS
  ----------Status code is 200 Created

PASS
----------Response message indicates successful deletion

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

### UML Diagram
Link :

https://lucid.app/lucidchart/4bef2422-3ab9-4f74-86ab-6e8940ab578b/edit?viewport_loc=-11205%2C-3690%2C15598%2C7741%2C0_0&invitationId=inv_869e03d0-1062-48ae-bbe8-8a50e88b2f59

### Documentation
 Link to Postman Published Documentation

https://documenter.getpostman.com/view/22989155/2s9YC4Ut9u