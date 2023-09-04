function Device(kind,power){
    this.kind = kind;
    this.power = power;
    this.isSupplied = false;
}

Device.prototype.supply = function(){
    console.log(this.name + "is supplied");
    isSupplied = true;
}

Device.prototype.notSupply = function(){
    console.log(this.name + "is not supplied");
    isSupplied = false;
}

//home devises:

function TV(name,power,brand,type){
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.type = type;
    this.isSupplied = true;
}

TV.prototype = new Device()
function MicrowaveOven(name,power,brand,type){
    this.name = name;
    this.power = power;
    this.brand = brand;
    this.type = type;
    this.isSupplied = true;
}
microwaveOven.prototype = new Device()

const plasmaTV = new TV("tv",100,"Samsung","plasma");
const whiteOven = new MicrowaveOven("Oven", 800, "Samsung", "home oven")

plasmaTV.supply();
whiteOven.no_supply();