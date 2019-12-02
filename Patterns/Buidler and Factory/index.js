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
            .setHomeWorld({ name: 'Zorgo', climate: 'Desert' })
            .setPerks(['Religios', 'Slow population growth', 'Long-living'])
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
var ReptileCorvett = /** @class */ (function () {
    function ReptileCorvett() {
        this.numberOfSections = 3;
    }
    ReptileCorvett.prototype.fly = function () {
        console.log('Reptile corvette is flying');
    };
    ReptileCorvett.prototype.shoot = function () {
        console.log("Firing with reptile light weapons");
    };
    return ReptileCorvett;
}());
var ReptileCruiser = /** @class */ (function () {
    function ReptileCruiser() {
        this.numberOfSections = 5;
    }
    ReptileCruiser.prototype.fly = function () {
        console.log('Reptile cruiser is flying');
    };
    ReptileCruiser.prototype.shoot = function () {
        console.log("Firing with reptile heavy weapons");
    };
    return ReptileCruiser;
}());
var ReptileTitan = /** @class */ (function () {
    function ReptileTitan() {
        this.numberOfSections = 5;
    }
    ReptileTitan.prototype.fly = function () {
        console.log('Reptile titan is flying');
    };
    ReptileTitan.prototype.shoot = function () {
        console.log("Firing with reptile super-heavy weapons");
    };
    return ReptileTitan;
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
var ReptileSpaceShipsFactory = /** @class */ (function (_super) {
    __extends(ReptileSpaceShipsFactory, _super);
    function ReptileSpaceShipsFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReptileSpaceShipsFactory.prototype.createCorvette = function () {
        return new ReptileCorvett();
    };
    ReptileSpaceShipsFactory.prototype.createCruser = function () {
        return new ReptileCruiser();
    };
    ReptileSpaceShipsFactory.prototype.createTitan = function () {
        return new ReptileTitan();
    };
    return ReptileSpaceShipsFactory;
}(SpaceShipsFactory));
var specieManager = new SpecieBuilderManager();
var choosenSpecie = specieManager.buildReptileSpecie(new SpecieBuilder());
var spaceShipsFactory = null;
switch (choosenSpecie.kind) {
    case 'Human': {
        spaceShipsFactory = new HumanSpaceShipsFactory();
    }
    case 'Reptiles': {
        spaceShipsFactory = new ReptileSpaceShipsFactory();
    }
}
var corvett = spaceShipsFactory.createCorvette();
var cruiser = spaceShipsFactory.createCruser();
var titan = spaceShipsFactory.createTitan();
corvett.fly();
corvett.shoot();
cruiser.fly();
cruiser.shoot();
