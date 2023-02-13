const axios=require('axios');


exports.homeRoutes=(req,res)=>{
    // make a get request to the api users
    axios.get('http://localhost:3008/api/users')
    .then(function(response){
        console.log(response.data)
        res.render('index.ejs',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    })

}
exports.add_user=(req,res)=>{
    res.render('add_user.ejs');
        res.render('add_user.ejs');

}
exports.update_user=(req,res)=>{
    axios.get('http://localhost:3008/api/users',{params : {id:req.query.id}})
    .then(function(userdata){
        console.log(userdata.data)
        res.render('update_user.ejs',{user:userdata.data});
    })
    .catch(err=>{
        res.send(err);
    })


}
// const axios = require('axios');


// exports.homeRoutes = (req, res) => {
//     // Make a get request to /api/users
//     axios.get('http://localhost:3008/api/users')
//         .then(function(response){
//             res.render('index', { users : response.data });
//         })
//         .catch(err =>{
//             res.send(err);
//         })

    
// }

// exports.add_user = (req, res) =>{
//     res.render('add_user');
// }

// exports.update_user = (req, res) =>{
//     axios.get('http://localhost:3008/api/users', { params : { id : req.query.id }})
//         .then(function(userdata){
//             res.render("update_user", { user : userdata.data})
//         })
//         .catch(err =>{
//             res.send(err);
//         })
// }
