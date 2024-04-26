import { Injectable } from '@angular/core';
import { Food } from 'src/app/models/food/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor() { }

  getFoodById(id:number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: "food 1",
        description: "Nestled between two perfectly toasted brioche buns lies a juicy, flame-kissed beef patty, its irresistible aroma wafting through the air, promising a symphony of flavors with every bite. A blanket of molten cheddar cheese cascades over the patty, its creamy richness mingling with the charred edges of the meat, creating a sensation that is at once comforting and decadent.",
        price: 150000,
        thumbnail: "../../../assets/food-1.jpg",
      },
      {
        id: 2,
        name: "food 2",
        description: "Nestled between two perfectly toasted brioche buns lies a juicy, flame-kissed beef patty, its irresistible aroma wafting through the air, promising a symphony of flavors with every bite. A blanket of molten cheddar cheese cascades over the patty, its creamy richness mingling with the charred edges of the meat, creating a sensation that is at once comforting and decadent.",
        price: 150000,
        thumbnail: "../../../assets/food-2.jpg",
      },
      {
        id: 1,
        name: "food 3",
        description: "Nestled between two perfectly toasted brioche buns lies a juicy, flame-kissed beef patty, its irresistible aroma wafting through the air, promising a symphony of flavors with every bite. A blanket of molten cheddar cheese cascades over the patty, its creamy richness mingling with the charred edges of the meat, creating a sensation that is at once comforting and decadent.",
        price: 150000,
        thumbnail: "../../../assets/food-3.jpg",
      },
      {
        id: 4,
        name: "food 4",
        description: "Nestled between two perfectly toasted brioche buns lies a juicy, flame-kissed beef patty, its irresistible aroma wafting through the air, promising a symphony of flavors with every bite. A blanket of molten cheddar cheese cascades over the patty, its creamy richness mingling with the charred edges of the meat, creating a sensation that is at once comforting and decadent.",
        price: 150000,
        thumbnail: "../../../assets/food-4.jpg",
      },
      {
        id: 5,
        name: "food 5",
        description: "Nestled between two perfectly toasted brioche buns lies a juicy, flame-kissed beef patty, its irresistible aroma wafting through the air, promising a symphony of flavors with every bite. A blanket of molten cheddar cheese cascades over the patty, its creamy richness mingling with the charred edges of the meat, creating a sensation that is at once comforting and decadent.",
        price: 150000,
        thumbnail: "../../../assets/food-5.jpg",
      },
    ]
  }
}
