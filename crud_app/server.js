const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();


dotenv.config({path:'config.env'})
const PORT=process.env.PORT || 3008


// // log request
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// // parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

// // set view engine
app.set("view engine parameteres","ejs")
// // app.set("views",path.resolve(__dirname,"views/ejs"));

// // load assests
app.use('/css',express.static(path.resolve(__dirname,"assests/css")))
app.use('/js',express.static(path.resolve(__dirname,"assests/js")))

// // css/style.css

// load routers
app.use('/',require('./server/routes/router.js'));

// app.get('/',(req,res) => {
//     // res.send("crud Applicationnnn");
//     res.render('index.ejs');

// })
// app.get('/add-user',(req,res) => {
//     // res.send("crud Applicationnnn");
//     res.render('add_user.ejs');

// })
// app.get('/update-user',(req,res) => {
//     // res.send("crud Applicationnnn");
//     res.render('update_user.ejs');

// })




app.listen(PORT,()=>{console.log("server is running on http://localhost:${PORT}")})