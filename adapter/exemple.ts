interface Car {
  speedUp(): void;
}

class Bike {
  pedal(): void {
    console.log("Pedaling the bike");
  }
}

class BikeAdapter implements Car {
  private bike: Bike;

  constructor(bike: Bike) {
    this.bike = bike;
  }

  speedUp(): void {
    this.bike.pedal();
  }
}

function main(vehicle: Car) {
  vehicle.speedUp();
}

const bike = new Bike();
const bikeAdapter = new BikeAdapter(bike);
main(bikeAdapter); // Output: Pedaling the bike
