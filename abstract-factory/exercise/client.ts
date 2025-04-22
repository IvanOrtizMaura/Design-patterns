import { CatFactory, DogFactory } from "./factory";
import { PetFactory } from "./factory.interface";
import { Food, Toy } from "./products.interface";

class Aplication {
  private readonly food: Food;
  private readonly toy: Toy;
  constructor(factory: PetFactory) {
    this.food = factory.createFood();
    this.toy = factory.createToy();
  }

  petShop(): void {
    this.food.getName();
    this.toy.play();
  }
}

const petType = "Dog"; // or "Cat"
let factory: PetFactory;

if (petType === "Dog") {
  factory = new DogFactory();
} else {
  factory = new CatFactory();
}
const app = new Aplication(factory);

app.petShop();
