import {
  ButtonMacOS,
  ButtonWindows,
  CheckboxMacOS,
  CheckboxWindows,
} from "./concrete-products";

import { Button, Checkbox } from "./products.interface";

import { UIFactory } from "./factory.interface";

export class WindowsFactory implements UIFactory {
  createButton(): Button {
    return new ButtonWindows();
  }
  createCheckbox(): Checkbox {
    return new CheckboxWindows();
  }
}

export class MacOSFactory implements UIFactory {
  createButton(): Button {
    return new ButtonMacOS();
  }
  createCheckbox(): Checkbox {
    return new CheckboxMacOS();
  }
}
