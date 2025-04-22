import { Button, Checkbox } from "./products.interface";
export interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
