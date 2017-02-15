# Node.js Playground

Small projects created for learning purposes of Node.js

# Projects descriptions

## hello-world

Simple Hello World app.

## notes-node

App for saving, reading, listing and deleting notes.

Use `node app.js --help` to read how to use.

## weather-app

Get current temperature and apparent temperature based on address.
Uses [Google Maps API](https://maps.googleapis.com) and [Dark Sky API](https://darksky.net).

Comes in two versions.
One uses [request](https://npmjs.com/package/request) package and callbacks.
Other uses [axios](https://npmjs.com/package/axios) package and promises.

Version which use promises also have the ability to save default location and convert temperature to Celsius.

Use `node app.js --help` to read how to use.

Caution: You will need to change `apiKey` variable to access Dark Sky API.

## node-webserver

Webserver created using [Express](http://expressjs.com) and [Handlebars](http://handlebarsjs.com/).

Run command: `npm start` or visit [https://warm-garden-10367.herokuapp.com/](https://warm-garden-10367.herokuapp.com/) to see site.

# Copyright
© [Krzysztof Michalski](https://github.com/nooulaif)
