import { Food, Toy } from "./products.interface";

export class DogFood implements Food {
  getName(): void {
    console.log("Dog food");
  }
}

export class DogToy implements Toy {
  play(): void {
    console.log("Playing with dog toy");
  }
}

export class CatFood implements Food {
  getName(): void {
    console.log("Dog food");
  }
}

export class CatToy implements Toy {
  play(): void {
    console.log("Playing with cat toy");
  }
}
