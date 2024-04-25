import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Food } from "../models/food/food.model";
import { FoodListService } from '../services/food/food-list.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  food!:Food;
  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodListService) {
    activatedRoute.params.subscribe(params => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);
    })
   }

  ngOnInit(): void {
  }

}
