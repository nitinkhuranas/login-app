# React + Redux + Firebase Sample App

Sample app demonstrating the power and simplicity of React, Redux and Firebase

## Contains

* [Webpack](https://webpack.github.io)
* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/rackt/redux)
* [Babel](https://babeljs.io/)
* [Firebase](https://www.npmjs.com/package/firebase)

## Firebase settings
--------
First you need to create your firebase application to fetch settings. For more information how to add your web app check this [resource](https://firebase.google.com/docs/web/setup). After it copy your settings from firebase and fill `config.json` for development and production.

```
{
    "dev": {
        "apiKey": "apikey",
        "authDomain": "authDomain",
        "databaseURL": "databaseURL",
        "projectId": "projectId",
        "storageBucket": "storageBucket",
        "messagingSenderId": "messagingSenderId"
    },
    "prod": {
        "apiKey": "apikey",
        "authDomain": "authDomain",
        "databaseURL": "databaseURL",
        "projectId": "projectId",
        "storageBucket": "storageBucket",
        "messagingSenderId": "messagingSenderId"
    }
}
```

## Setup

```
$ npm install
```

## Running

```
$ npm start
```

## Build
To Build the application to `./dist` in production mode
```
$ npm run build
```