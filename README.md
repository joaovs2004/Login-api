# Login Api

A simple api to register new users and login 

## Prerequisites

- Node

## Instructions

```bash
# First install the dependecies
$ npm install

# Then run the code
$ node app.js
```

With the api running you can use something like insomnia to test it

The api runs on localhost:8080

## About

This api has two options: /register and /login

Both need a body containing the user name and the user password, like this

- Body

        {
            "user": "name of user",
            "password": "user password",
        }
