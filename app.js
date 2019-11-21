const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('common'));

app.get('/pokemon', (req, res) => {
 // ** search options = name or type
 // ** name = users are searching for whether the Pokemon's name includes a specified string. 
 //The search should be case insensitive.
 // ** type = drop down menu with one of the valid types
 //The API responds with an array of full pokedex entries for the search results
 
 const validTypes = [`Bug`, `Dark`, `Dragon`, `Electric`, `Fairy`, `Fighting`, `Fire`, `Flying`, `Ghost`, `Grass`, `Ground`, `Ice`, `Normal`, `Poison`, `Psychic`, `Rock`, `Steel`, `Water`]
})

app.get('/types', (req, res) => {
    // should return a list of all valid types.
})




module.exports = app;