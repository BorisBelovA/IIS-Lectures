interface ISpecies {
    name: string;
    kind: string;
    homeWorld: {
        name: string,
        climate: string
    },
    perks: string[];
}


interface ISpeciesBuilder {
    specie: ISpecies;
    setName(name: string): ISpeciesBuilder;
    setKind(kind: string): ISpeciesBuilder;
    setHomeWorld({ name, climate }): ISpeciesBuilder;
    setPerks(perks: string[]): ISpeciesBuilder;
    getResults(): ISpecies;
}


class SpecieBuilder implements ISpeciesBuilder {

    specie: ISpecies;

    constructor() {
        this.specie = {
            name: '',
            kind: '',
            homeWorld: {name: '', climate: ''},
            perks: []
        }
    }

    public setName(name: string): ISpeciesBuilder {
        this.specie.name = name;
        return this;
    };

    public setKind(kind: string): ISpeciesBuilder {
        this.specie.kind = kind;
        return this;
    };

    public setHomeWorld({ name, climate }): ISpeciesBuilder {
        this.specie.homeWorld = {
            name: name,
            climate: climate
        };
        return this;
    };

    public setPerks(perks: string[]): ISpeciesBuilder {
        this.specie.perks = perks;
        return this;
    };

    public getResults(): ISpecies {
        return this.specie;
    }
}

class SpecieBuilderManager {

    constructor () {}

    buildHumanSpecie(builder: ISpeciesBuilder): ISpecies {
        return builder
        .setName('Human')
        .setKind('Human')
        .setHomeWorld({name: 'Earth', climate: 'Standart'})
        .setPerks(['Intelligent','Agressive'])
        .getResults()
    }

    buildReptileSpecie(builder: ISpeciesBuilder): ISpecies {
        return builder
        .setName('Reptile Nation')
        .setKind('Reptiles')
        .setHomeWorld({name: 'Zorgo', climate: 'Desert'})
        .setPerks(['Religios','Slow population growth', 'Long-living'])
        .getResults()
    }

}

interface ISpaceShip {
    numberOfSections: number;
    fly(): void;
    shoot(): void;
}

interface ICorvette extends ISpaceShip {}
interface ICruiser extends ISpaceShip {}
interface ITitan extends ISpaceShip{}

class HumanCorvett implements ICorvette {
    
    numberOfSections = 3;

    public fly(): void {
        console.log('Human corvette is flying');
    }

    public shoot(): void {
        console.log("Firing with human light weapons");
    }
}

class HumanCruiser implements ICruiser {
    numberOfSections = 5;

    public fly(): void {
        console.log('Human cruiser is flying');
    }

    public shoot(): void {
        console.log("Firing with human heavy weapons");
    }
}

class HumanTitan implements ITitan {
    numberOfSections = 5;

    public fly(): void {
        console.log('Human titan is flying');
    }

    public shoot(): void {
        console.log("Firing with human super-heavy weapons");
    }
}

abstract class SpaceShipsFactory {
    abstract createCorvette(): ICorvette;
    abstract createCruser(): ICruiser;
    abstract createTitan(): ITitan;
}


class HumanSpaceShipsFactory extends SpaceShipsFactory {
    createCorvette() {
        return new HumanCorvett();
    }

    createCruser(){
        return new HumanCruiser();
    }

    createTitan(){
        return new HumanTitan();
    }
}

const specieManager = new SpecieBuilderManager();

const choosenSpecie = specieManager.buildHumanSpecie(new SpecieBuilder());

let spaceShipsFactory: SpaceShipsFactory = null;

switch(choosenSpecie.kind){
    case 'Human': {
        spaceShipsFactory = new HumanSpaceShipsFactory();
    }
    case 'Reptiles': {
        spaceShipsFactory = new HumanSpaceShipsFactory();        
    }
}

const corvett = spaceShipsFactory.createCorvette()
const cruiser = spaceShipsFactory.createCruser()
const titan = spaceShipsFactory.createTitan()

corvett.fly()
corvett.shoot()

cruiser.fly()
cruiser.shoot();




