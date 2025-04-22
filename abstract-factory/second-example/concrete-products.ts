import { Button, Checkbox } from "./products.interface";

export class ButtonWindows implements Button {
  render(): void {
    console.log("Windows button painted.");
  }
}

export class ButtonMacOS implements Button {
  render(): void {
    console.log("MacOS button painted.");
  }
}

export class CheckboxWindows implements Checkbox {
  render(): void {
    console.log("Windows checkbox painted");
  }
}

export class CheckboxMacOS implements Checkbox {
  render(): void {
    console.log("MacOS checkbox painted");
  }
}
