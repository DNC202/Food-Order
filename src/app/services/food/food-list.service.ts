import { Injectable } from '@angular/core';
import { Food } from 'src/app/models/food/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor() { }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: "food 1",
        description: "description food 1",
        price: 150000,
        thumbnail: "../../../assets/food-1.jpg",
      },
      {
        id: 2,
        name: "food 2",
        description: "description food 2",
        price: 150000,
        thumbnail: "../../../assets/food-2.jpg",
      },
      {
        id: 1,
        name: "food 3",
        description: "description food 3",
        price: 150000,
        thumbnail: "../../../assets/food-3.jpg",
      },
      {
        id: 4,
        name: "food 4",
        description: "description food 4",
        price: 150000,
        thumbnail: "../../../assets/food-4.jpg",
      },
      {
        id: 5,
        name: "food 5",
        description: "description food 5",
        price: 150000,
        thumbnail: "../../../assets/food-5.jpg",
      },
    ]
  }
}
