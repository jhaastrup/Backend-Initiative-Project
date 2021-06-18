const express = require("express");

const router = express.Router();

const {getMovies, createMovie, getMovie, deleteMovie, updateMovie} = require('../controllers/movies');

//get all movies
router.get('/', getMovies);

//create a new movie
router.post('/', createMovie);

//get one movie 
router.get('/:id', getMovie);

//delete one movie 
router.delete('/:id', deleteMovie);

//update movie 
router.patch('/:id', updateMovie);





module.exports = router;