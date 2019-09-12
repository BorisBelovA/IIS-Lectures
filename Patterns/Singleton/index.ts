class Government {
    private static instance: Government;

    private constructor() {}

    public static getGovernment(): Government {
        if(Government.instance){
            Government.instance = new Government();
        }
        return Government.instance;
    }
}


const g1 = Government.getGovernment();

const g2 = Government.getGovernment();

g1 === g2 ? console.log('Same gov') : console.log('not the same')