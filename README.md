# Readme
Link To Hosted Version:
[TH News](https://th-news.netlify.app)

## What is this project?
This project is the backend API of TH News, a reddit-style news app that allows users to read, like and comment on articles. 
It is built using Express, and the endpoints and routing allow for the frontend to connect with the database.

## Cloning
1. Navigate to a local directory in your CLI (e.g. Terminal) 
2. Run this command:  `git clone https://github.com/tom-ai/be-nc-news.git`

## Getting Started
Required for the project are **Node.js** and **Postgres**. Make sure you have these installed to a minimum version of
Node.js - `v17.7.2`
Postgres - `14.2`
### Install dependencies
1. Install Node if you haven’t already: [Node.js](https://nodejs.org/en/)
2. Run `npm install` to install the necessary dependencies

### Seed the local database
The database will first need to be seeded with data. To do this, run `npm run seed` in the CLI
### Use different data sets
There are two sets of data included: test and development. When running the test suites, test data is seeded and the test database is used.
You will need to create two `.env` files with some text inside:
1. `test.env` with with `PGDATABASE=nc_news_test`
2. `development.env` with `PGDATABASE=nc_news`
For security, add the filenames to your `.gitignore` file
### Run tests
To run the tests, run the following command:
`npm test __tests__/app.test.js`
