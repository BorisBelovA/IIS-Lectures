const User = require('../models/user.js');

exports.addUser = function(request, response){
    response.render('create.hbs')
};

exports.getUsers = function(request, response){
    User.find({}, function(err, allUsers){
        if(err) {
            console.log(err);
            return response.sendStatue(400);
        }else {
            response.render('users.hbs', {
                users: allUsers
            })
        }
    })
    // response.render('users.hbs', {
    //     users: User.getAll()
    // })
};

exports.postUder = function(request, response){
    if(!request.body) return response.sendStatus(400);
    const userName = request.body.name;
    const userAge = request.body.age;
    const user = new User({name: userName, age: userAge});
     
    user.save(function(err){
        if(err) return console.log(err);
        response.redirect("/users");
    });
    // const username = request.body.name;
    // const userage = request.body.age;
    // const user = new User(username, userage);
    // user.save();
    // response.redirect("/users");
}

exports.getUser = function(request, response){
    const userId = request.params.id;
    console.log(userId);
    response.send(userId)
}