import { CatFood, CatToy, DogFood, DogToy } from "./concrete-products";
import { PetFactory } from "./factory.interface";
import { Food, Toy } from "./products.interface";

export class DogFactory implements PetFactory {
  createFood(): Food {
    return new DogFood();
  }
  createToy(): Toy {
    return new DogToy();
  }
}

export class CatFactory implements PetFactory {
  createFood(): Food {
    return new CatFood();
  }

  createToy(): Toy {
    return new CatToy();
  }
}
