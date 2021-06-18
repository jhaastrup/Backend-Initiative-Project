const { v4: uuidv4 } = require('uuid');


/**
 * Users input format
 * {
 * Firstname: "Adejoke",
 * Lastname: "Haastrup",
 * Email:"jhaastrup21@gmail.com"
 * 
 * }
 */

//create an empty array 
let Users = []


//get all users
const getUsers = (req, res) => {
    res.send(Users);
} 

//create new user 
const createUser = (req, res) => {   
    const user = req.body;

    Users.push({...user, id:uuidv4()});
    res.send(`New user ${user.Firstname} created successfully`);
};

//get one user
const getUser = (req, res) => {
    const {id} = req.params
     const findUser = Users.find((user) => user.id = id)
     res.send(findUser);
};

//delete one user

const deleteUser = (req, res) => { 
    const {id} = req.params;
    users = Users.filter((user) => user.id != user);
    res.send(`user with  id ${id} has been deleted`);
}; 

//update user
const updateUser = (req, res) =>{
    const {id} = req.params;
      const {Firstname, Lastname, Email} = req.body

      const user = Users.find((user)=> user.id = id);

      if(Firstname) user.Firstname = Firstname;
      if(Lastname) user.Lastname = Lastname;
      if(Email) user.Email = Email;

      res.send(`user with id ${id} has been updated`);
}


module.exports = { getUsers, createUser, getUser, deleteUser, updateUser};