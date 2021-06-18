const express = require("express");

const router = express.Router();
const {getUsers, createUser, getUser,deleteUser, updateUser} = require('./controllers/users');




//get all users
router.get('/', getUsers);


//create a new user
router.post('/', createUser);

//get one user 
router.get('/:id', getUser); 

//delete one user
router.delete('/:id', deleteUser);

//update user 
router.patch('/:id', updateUser);




module.exports = router;

