import {removePixels} from "src/helpers/remove-pixels/remove-pixels";

/** Helper Class that sum and subtracts pixel values */
export class CalculatePixels {
  private readonly initialValue: string;

  /**
   *
   * @param initialValue string value represented as pixels, e.g. 14px
   */
  public constructor(initialValue: string) {
    this.initialValue = initialValue;
  }

  /**
   *
   * @param value string value represented as pixels, e.g. 14px
   * @returns new class instance with calculated value
   */
  public sum = (value: string): CalculatePixels => {
    const newValue = removePixels(this.initialValue) + removePixels(value);

    return new CalculatePixels(`${newValue}px`);
  };

  /**
   * Use this method to sum a number inside the chain of operations
   * @param value number value
   * @returns new class instance with calculated value
   */
  public sumNumber = (value: number): CalculatePixels => {
    const newValue = removePixels(this.initialValue) + value;

    return new CalculatePixels(`${newValue}px`);
  };

  /**
   *
   * @param value string value represented as pixels, e.g. 14px
   * @returns new class instance with calculated value
   */
  public substract = (value: string): CalculatePixels => {
    const newValue = removePixels(this.initialValue) - removePixels(value);

    return new CalculatePixels(`${newValue}px`);
  };

  /**
   *
   * @returns class instance with final value
   */
  public result = (): CalculatePixels => new CalculatePixels(this.initialValue);

  /**
   *
   * @returns return result as string value
   */
  public withPixels = (): string => this.initialValue;

  /**
   *
   * @returns return result as number value
   */
  public toNumber = (): number => removePixels(this.initialValue);
}
