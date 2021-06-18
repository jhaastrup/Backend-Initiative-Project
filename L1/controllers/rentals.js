const { v4: uuidv4 } = require('uuid'); 
/**
 * Rentals input format 
 * {
 *   "date_rented":DateTime()
 *   "movie_id": 00001
 *   "user_id":00002
 *    "createdAt":timeCreated
 * "title":"captain man"
 * 
 * }
 */

//create an empty array of rentals 
let Rentals = [];
const d = new Date();
const  formatedDate = d.toISOString();

//get all rentals 
const getRentals = (req, res) => {
    res.send(Rentals);
} 


//create new rental
const createRental = (req, res) => {   
    const rental = req.body;
    const newRental = {...rental, date_created:formatedDate, movie_id:uuidv4(), id:uuidv4() };
    Rentals.push(newRental);
    res.send(newRental);
}; 


//get one rental

const getRental = (req, res) => {
    const {id} = req.params
     const findRental = Rentals.find((rental) => rental.id = id)
     res.send(findRental);
}; 


//delete rental
const deleteRental = (req, res) => { 
    const {id} = req.params;
    console.log(id);
    rentals = Rentals.filter((rental) => rental.id != rental);
    res.send({deleted:true});
};  





module.exports = {getRentals, createRental, getRental, deleteRental};