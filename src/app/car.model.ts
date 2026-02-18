export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  image: string;
}

export class CarModel implements Car {
  constructor(
    public id: number,
    public brand: string,
    public model: string,
    public year: number,
    public image: string
  ) {}
}
