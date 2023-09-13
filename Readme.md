
# Node.js CRUD API Documentation

This Node.js CRUD API project is designed to provide a simple and flexible way to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource. This documentation will guide you through setting up, using, and understanding the API.


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  -[Database](#database)
- [Testing](#testing)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Node.js CRUD API project is designed to provide a simple and flexible way to perform CRUD (Create, Read, Update, Delete) operations on a "person" resource.

## Features

[List key features or functionalities of your project.]

- CRUD Operations
- UML Diagram
- Automated Testing

## Getting Started

[Explain how to get your project up and running. Include information on prerequisites and installation steps.]

### Prerequisites

[List any software or dependencies that users need to have installed before they can use your project.]

Before you begin, ensure you have the following installed on your system:


- Node.js - Download and install Node.js from nodejs.org.

### Installation / Setup

[Guide users through the installation process. You can use code blocks for commands.]

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
npm run dev
```


### Usage
[Explain how users can use your project. Provide examples and usage scenarios.]

### API Endpoints


```
/api/getAll: Get all data.
/api/:id: Get data by ID.
/api/post: Create new data.
/api/:id: Update data by ID.
/api/:id: Delete data by ID.
```
### Database

This API uses a MongoDB database by default. If you want to use a different database, make sure to configure it accordingly. Open the .env file and set the following variables:
```
DB_URL: URL of your database connection.
```

| HTTP Verbs | Endpoints | Action |
| --------------- | --------------- | --------------- |
| GET | /api/getAll | Gets every person in the database |
| GET | /api/:user_id | Gets details of a single person by id |
| POST | /api/post | Creates a new person |
| PATCH | /api/:user_id | Updates details of a person |
| DELETE | /api/:user_id | Deletes details of a person in the database |



#### Link to Post Published Documentation

https://documenter.getpostman.com/view/22989155/2s9YC4Ut9u