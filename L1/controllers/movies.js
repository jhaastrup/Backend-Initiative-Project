const { v4: uuidv4 } = require('uuid');

/**
 * Movies input format 
 * {
 * title :"Endgame",
 * description:"MCU avenger endgame",
 * genre:"comic"
 * rentalPrice:500
 * qtyInStock:10
 * 
 * 
 * }
 */
 
//create an empty array of movies
let Movies = [];

//get all movies 
const getMovies = (req, res) => {
    res.send(Movies);
} 

//create new movie
const createMovie = (req, res) => {   
    const movie = req.body;
    const newMovie = {...movie, id:uuidv4()};
    Movies.push(newMovie);
    //console.log(newMovie)
    res.send(newMovie);
}; 

//get one movie
const getMovie = (req, res) => {
    const {id} = req.params
     const findMovie = Movies.find((movie) => movie.id = id)
     res.send(findMovie);
}; 

//delete d movie 
const deleteMovie = (req, res) => { 
    const {id} = req.params;
    movies = Movies.filter((movie) => movie.id != movie);
    res.send({delete:true});
}; 


//update movie
const updateMovie = (req, res) =>{
    const {id} = req.params;
      const {rentalPrice, qtyInStock} = req.body

      const movie = Movies.find((movie)=> movie.id = id);
      console.log(movie);
      if(rentalPrice) movie.rentalPrice = rentalPrice;
      if(qtyInStock) movie.qtyInStock = qtyInStock;

      res.send({updated:true});
}





module.exports = {getMovies, createMovie, getMovie, deleteMovie, updateMovie};