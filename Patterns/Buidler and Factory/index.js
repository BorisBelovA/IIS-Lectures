var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SpecieBuilder = /** @class */ (function () {
    function SpecieBuilder() {
        this.specie = {
            name: '',
            kind: '',
            homeWorld: { name: '', climate: '' },
            perks: []
        };
    }
    SpecieBuilder.prototype.setName = function (name) {
        this.specie.name = name;
        return this;
    };
    ;
    SpecieBuilder.prototype.setKind = function (kind) {
        this.specie.kind = kind;
        return this;
    };
    ;
    SpecieBuilder.prototype.setHomeWorld = function (_a) {
        var name = _a.name, climate = _a.climate;
        this.specie.homeWorld = {
            name: name,
            climate: climate
        };
        return this;
    };
    ;
    SpecieBuilder.prototype.setPerks = function (perks) {
        this.specie.perks = perks;
        return this;
    };
    ;
    SpecieBuilder.prototype.getResults = function () {
        return this.specie;
    };
    return SpecieBuilder;
}());
var SpecieBuilderManager = /** @class */ (function () {
    function SpecieBuilderManager() {
    }
    SpecieBuilderManager.prototype.buildHumanSpecie = function (builder) {
        return builder
            .setName('Human')
            .setKind('Human')
            .setHomeWorld({ name: 'Earth', climate: 'Standart' })
            .setPerks(['Intelligent', 'Agressive'])
            .getResults();
    };
    SpecieBuilderManager.prototype.buildReptileSpecie = function (builder) {
        return builder
            .setName('Reptile Nation')
            .setKind('Reptiles')
            .setHomeWorld({ name: 'Earth', climate: 'Standart' })
            .setPerks(['Intelligent', 'Agressive'])
            .getResults();
    };
    return SpecieBuilderManager;
}());
var HumanCorvett = /** @class */ (function () {
    function HumanCorvett() {
        this.numberOfSections = 3;
    }
    HumanCorvett.prototype.fly = function () {
        console.log('Human corvette is flying');
    };
    HumanCorvett.prototype.shoot = function () {
        console.log("Firing with human light weapons");
    };
    return HumanCorvett;
}());
var HumanCruiser = /** @class */ (function () {
    function HumanCruiser() {
        this.numberOfSections = 5;
    }
    HumanCruiser.prototype.fly = function () {
        console.log('Human cruiser is flying');
    };
    HumanCruiser.prototype.shoot = function () {
        console.log("Firing with human heavy weapons");
    };
    return HumanCruiser;
}());
var HumanTitan = /** @class */ (function () {
    function HumanTitan() {
        this.numberOfSections = 5;
    }
    HumanTitan.prototype.fly = function () {
        console.log('Human titan is flying');
    };
    HumanTitan.prototype.shoot = function () {
        console.log("Firing with human super-heavy weapons");
    };
    return HumanTitan;
}());
var SpaceShipsFactory = /** @class */ (function () {
    function SpaceShipsFactory() {
    }
    return SpaceShipsFactory;
}());
var HumanSpaceShipsFactory = /** @class */ (function (_super) {
    __extends(HumanSpaceShipsFactory, _super);
    function HumanSpaceShipsFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HumanSpaceShipsFactory.prototype.createCorvette = function () {
        return new HumanCorvett();
    };
    HumanSpaceShipsFactory.prototype.createCruser = function () {
        return new HumanCruiser();
    };
    HumanSpaceShipsFactory.prototype.createTitan = function () {
        return new HumanTitan();
    };
    return HumanSpaceShipsFactory;
}(SpaceShipsFactory));
var specieManager = new SpecieBuilderManager();
var choosenSpecie = specieManager.buildHumanSpecie(new SpecieBuilder());
console.log(choosenSpecie.kind);
var spaceShipsFactory = null;
switch (choosenSpecie.kind) {
    case 'Human': {
        spaceShipsFactory = new HumanSpaceShipsFactory();
    }
}
var corvett = spaceShipsFactory.createCorvette();
var cruiser = spaceShipsFactory.createCruser();
var tTitan = spaceShipsFactory.createTitan();
corvett.fly();
corvett.shoot();
cruiser.fly();
cruiser.shoot();
/*const humanFactory = new HumanSpaceShipsFactory();
const hCorvett = humanFactory.createCorvette()
const hCruiser = humanFactory.createCruser()
const hTitan = humanFactory.createTitan()

hCorvett.fly()
hCorvett.shoot()

hCruiser.fly()
hCruiser.shoot(); */
