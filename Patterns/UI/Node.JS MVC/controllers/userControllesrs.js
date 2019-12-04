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
};

exports.postUder = function(request, response){
    if(!request.body) return response.sendStatus(400);
    const userName = request.body.name;
    const userAge = request.body.age;
    let amount = null;
    User.countDocuments()
    .then(count => amount = count)
    .then(() => console.log(amount))
    .then(() => {
        const user = new User({id: amount+1, name: userName, age: userAge});
        user.save(function(err){
            if(err) return console.log(err);
            response.redirect("/users");
        });
    })
}

exports.getUser = function(request, response){
    const userId = request.params.id;
    User.find({id: userId})
    .then((u) => {
        response.render('editUser.hbs', {
            user: u[0]
        })
    })
}

exports.saveUser = function(request, response) {
    if(!request.body) return response.sendStatus(400);
    const userId = request.body.id;
    const userName = request.body.name;
    const userAge = request.body.age;
    const user = new User({id: userId, name: userName, age: userAge})
    User.findOne({id: userId})
    .then((u) => {
        u.overwrite({id: userId, name: userName, age: userAge})
        u.save()
        response.redirect('/users')
    })
}