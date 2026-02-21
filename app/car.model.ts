export interface Car {
  brand: string;
  model: string;
  year: number;
  image: string;
  clicks?: number;
}

export class CarItem implements Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number,
    public image: string,
    public clicks: number = 0
  ) {}

  getDescription(): string {
    return `${this.brand} ${this.model} (${this.year})`;
  }
}