class Devise{
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isSupplied = false;
    }
    supply(){
        console.log(`${this.name} ${this.brand} is supplied`);
        isSupplied = true;
    }

    no_supply(){
        console.log(`${this.name} ${this.brand} is\`t supplied`);
        isSupplied = false;
    }
}

class TV extends Devise{
    constructor(name, power, brand, type_of_TV) {
        super(name, power);
        this.brand = brand;
        this.type_of_TV = type_of_TV;
        this.isSupplied = true;
    }
}

class MicrowaveOven extends Devise{
    constructor(name, power, brand, type) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.isSupplied = false;

    }
}


const whiteOven = new MicrowaveOven("Microwave oven", 500, "Samsung");
const plasmaTV = new TV("TV", 100, "Samsung", "plasma");

function total_power(){
    tp = whiteOven.power + plasmaTV.power;
    console.log("Общая потребляемая мощность: " + str(tp));
}

whiteOven.no_supply()
plasmaTV.supply()