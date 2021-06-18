const express = require("express");
const bodyParser = require("body-parser");

//const User = require('./routes/users');



// Create a new instance of express 
const app = express();  

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json())

app.use('/users', require('./routes/users'));
app.use('/movies',require('./routes/movies'));
app.use('/rentals',require('./routes/rentals'));


//root route
app.get("/", (req, res) => {
    res.send("Welcome to L1 Task");
  });


app.listen(process.env.PORT || 4000, () => {
    console.log("sever app listening on port 4000! 🚀");
  });