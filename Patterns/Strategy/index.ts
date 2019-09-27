interface DateTimeConverter {
    convert(date: Date)
}

class EuropeanDateTimeConverter implements DateTimeConverter {

    private options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    convert(date: Date) {
        return date.toLocaleString('en-US', this.options)
    }
}

class USDateTimeConverter implements DateTimeConverter {
    convert(date: Date) {
        return date.toLocaleString('en-US')
    }
}

class RuDateTimeConverter implements DateTimeConverter {
    private options = { year: 'numeric', month: 'numeric', day: '2-digit', hour: 'numeric', minute: 'numeric', hour12: false };
    convert(date: Date) {
        const DateTime = date.toLocaleString('en-US', this.options);
        const replacer = /\//g;
        let Date = DateTime.split(',')[0].replace(replacer, '.');
        let [day, month, year] = [Date.split('.')[0], Date.split('.')[1], Date.split('.')[2]];
        if(Number(day)<10){
            day = `0${day}`
        }
        let str = `${month}.${day}.${year}` +''+ DateTime.split(',')[1];
        return str
    }
}

export class DalilyGreeter {

    dateTimeConverter: DateTimeConverter;

    personToGreet: string;
    constructor(name: string) {
        this.personToGreet = name;
    }

    setConverter(converterType: DateTimeConverter) {
        this.dateTimeConverter = converterType;
    }

    convertDateTime() {
        return this.dateTimeConverter.convert(new Date())
    }

    greet() {
        console.log(`Greetings, ${this.personToGreet}! Current time: ${this.convertDateTime()}`)
    }

}

let region;
let dailyGreeter = new DalilyGreeter('Hans')
switch (region) {
    case 'eu': {
        dailyGreeter.setConverter(new EuropeanDateTimeConverter());
        break;
    }
    case 'us': {
        dailyGreeter.setConverter(new USDateTimeConverter());
        break;
    }
    default: {
        dailyGreeter.setConverter(new RuDateTimeConverter())
    }
}

dailyGreeter.greet();

