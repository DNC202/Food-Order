export class Food {
   id: number;
   name: string;
   description: string;
   price: number;
   thumbnail: string;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    thumbnail: string
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
  }
}
