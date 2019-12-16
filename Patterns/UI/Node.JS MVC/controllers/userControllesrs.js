const User = require('../models/user.js');
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3001 });
wss.on('connection', function connection(ws) {
    console.log('connected')
    ws.on('message', function incoming(message) {
        wss.clients.forEach((client) => {
            client.send(message);
        })
    });
});

exports.addUser = function (request, response) {
    response.render('create.hbs')
};

exports.getUsers = function (request, response) {

    User.find({}, function (err, allUsers) {
        if (err) {
            console.log(err);
            return response.sendStatue(400);
        } else {
            response.render('users.hbs', {
                users: allUsers
            })
        }
    })
};

exports.postUder = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const userName = request.body.name;
    const userAge = request.body.age;
    let amount = null;
    const user = new User({ id: amount + 1, name: userName, age: userAge });
    user.save();
    wss.clients.forEach((client) => {
        let str = JSON.stringify({
            action: 'add',
            payload: 'Добавлена новая запись. Обновите страницу!'
        });
        client.send(str)
        
    })
    response.redirect("/users");

    /*user.save(function (err) {
        if (err) return console.log(err);
        console.log(amount)
        wss.clients.forEach((client) => {
            let str = JSON.stringify({
                action: 'add',
                payload: {
                    id: user.id,
                    name: userName,
                    age: userAge
                }
            });
            client.send(str)
        })
        response.redirect("/users");
    })*/
    /*async () => {
        user.save();

        await User.find({}, function (err, allUsers) {
            if (err) {
                console.log(err);
                return response.sendStatue(400);
            } else {
                console.log(allUsers)
                wss.clients.forEach((client) => {
                    let str = JSON.stringify({
                        action: 'delete',
                        payload: {
                            users: allUsers
                        }
                    });
                    client.send(str)
                })
            }
            response.redirect("/users");
        })
    }*/
    /*User.countDocuments()
        .then(count => amount = count)
        .then(() => console.log(amount))
        .then(() => {
            const user = new User({ id: amount + 1, name: userName, age: userAge });
            user.save(function (err) {
                if (err) return console.log(err);
                console.log(amount)
                wss.clients.forEach((client) => {
                    let str = JSON.stringify({
                        action: 'add',
                        payload: {
                            id: user.id,
                            name: userName,
                            age: userAge
                        }
                    });
                    client.send(str)
                })
                response.redirect("/users");
            });
        })*/
}

exports.getUser = function (request, response) {
    const userId = request.params.id;
    User.find({ _id: userId })
        .then((u) => {
            response.render('editUser.hbs', {
                user: u[0]
            })
        })
}

exports.saveUser = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const userId = request.body.id;
    const userName = request.body.name;
    const userAge = request.body.age;
    const user = new User({ id: userId, name: userName, age: userAge })
    User.findOne({ _id: userId })
        .then((u) => {
            u.overwrite({ _id: userId, name: userName, age: userAge })
            u.save()
            wss.clients.forEach((client) => {
                let str = JSON.stringify({
                    action: 'update',
                    payload: {
                        id: userId,
                        name: userName,
                        age: userAge
                    }
                });
                client.send(str)
            })
            response.redirect('/users')
        })

}

exports.deleteUser = function (request, response) {
    if (!request.body) return response.sendStatus(400);
    const userId = request.params.id;
    //Сокет сообщение об обновлении страницы
    User.deleteOne({ _id: userId })
        .then(() => {
            User.find({}, function (err, allUsers) {
                if (err) {
                    console.log(err);
                    return response.sendStatue(400);
                } else {
                    console.log(allUsers)
                    wss.clients.forEach((client) => {
                        let str = JSON.stringify({
                            action: 'delete',
                            payload: {
                                users: allUsers
                            }
                        });
                        client.send(str)
                    })
                }
            })
        })
}