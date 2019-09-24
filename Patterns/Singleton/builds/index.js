var Government = /** @class */ (function () {
    function Government() {
    }
    Government.getGovernment = function () {
        if (Government.instance) {
            Government.instance = new Government();
        }
        return Government.instance;
    };
    return Government;
}());
var g1 = Government.getGovernment();
var g2 = Government.getGovernment();
g1 === g2 ? console.log('Same gov') : console.log('not the same');
