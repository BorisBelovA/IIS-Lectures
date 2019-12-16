exports.about = function (request, response) {
    response.send("О сайте");
};

exports.index = function (request, response) {
    response.render('index.hbs');
};