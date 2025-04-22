import { WindowsFactory, MacOSFactory } from "./factory";
import { Button, Checkbox } from "./products.interface";
import { UIFactory } from "./factory.interface";

class Aplication {
  private readonly button: Button;
  private readonly checkbox: Checkbox;
  constructor(factory: UIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  renderUI(): void {
    this.button.render();
    this.checkbox.render();
  }
}

const SO = "Windows"; // or "MacOS"
let factory: UIFactory;

if (SO === "Windows") {
  factory = new WindowsFactory();
} else {
  factory = new MacOSFactory();
}
const app = new Aplication(factory);
app.renderUI();
