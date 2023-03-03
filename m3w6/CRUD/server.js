const express = require("express");
const morgan = require("morgan")
const bodyparser = require("body-parser")
const app = express()
const port = 8080;//3000, 8000

//DATABASE
const pokemonDatabase = [
    {
        id: 0,
        pokemonName: "Pikachu",
        level: 10,
        type: "electric"
    },
    {
        id: 1,
        pokemonName: "Charizard",
        level: 36,
        type: "fire/flying"
    },
    {
        id: 2,
        pokemonName: "Mewtwo",
        level: 50,
        type: "psychic"
    },
    {
        id: 3,
        pokemonName: "Psyduck",
        level: 100,
        type: "water/psychic"
    },
]

//CRUD - these are four operations, to make data persistant
//CREATE
//READ
//UPDATE
//DELETE

// GET
// POST
// PUT
// DELETE

//DONE//User to be able to fetch all of their pokemon - GET - READ - /

//DONE//User to be able to add a new pokemon - POST - CREATE - /catch
/////First we need a way OR a page to retrieve all the information of said pokemon
/////Then using the post route, we want to add it to the database

//DONE//User to be able to edit existing pokemon - POST - UPDATE - /edit
//DONE//User to be able to delete existing pokemon - POST - DELETE - /release



app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))

//View engine
app.set('view engine', 'ejs')
// localhost:8080/
///GET ROUTES
app.get("/", (request, response) => {
    //Request to database, then set that information to a variable, and pass it down
    response.render("index", {pokemonDatabase: pokemonDatabase})
})
app.get("/catch", (request, response) => {
    response.render("catchPokemon")
})
app.get("/edit/:id", (request, response) => {
    console.log(pokemonDatabase[request.params.id])
    response.render("editPokemon", {pokemon: pokemonDatabase[request.params.id]})
})

///POST ROUTES
app.post("/catch", (request, response) => {
    //Creating the new pokemon object with the information from the form
    const newPokemonObject = {
        id: pokemonDatabase.length - 1,
        pokemonName: request.body.pokemonName,
        level: request.body.pokemonLevel,
        type: request.body.pokemonType
    }
    //Then adding it to our database
    pokemonDatabase.push(newPokemonObject)
    response.redirect("/")
})
app.post("/edit/:id", (request, response) => {
    //Creating the new pokemon object with the information from the form
    const existingPokemonObject = {
        id: request.params.id,
        pokemonName: request.body.pokemonName,
        level: request.body.pokemonLevel,
        type: request.body.pokemonType
    }
    //Then adding it to our database
    pokemonDatabase[request.params.id] = existingPokemonObject
    response.redirect("/")
})
app.post("/release/:id", (request, response) => {
    pokemonDatabase.splice(request.params.id, 1)

    response.redirect("/")
})

app.listen(port, () => console.log(`Server is running on port ${port}!`))