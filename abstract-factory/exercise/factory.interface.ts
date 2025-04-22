import { Food, Toy } from "./products.interface";

export interface PetFactory {
  createFood(): Food;
  createToy(): Toy;
}
