const express = require("express");

const router = express.Router();

const {getRentals, createRental, getRental, deleteRental} = require('../controllers/rentals');

//get all rentals
router.get('/', getRentals);


//create new rental
router.post('/', createRental);

//get one rental 
router.get('/:id', getRental);

//delete rental
router.delete('/:id', deleteRental);



module.exports = router;