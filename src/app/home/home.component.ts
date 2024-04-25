import { Component, OnInit } from '@angular/core';
import { FoodListService } from '../services/food/food-list.service';
import { Food } from '../models/food/food.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [];
  constructor(private fls: FoodListService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      if (params['searchItem']) {
        this.foods = this.fls
          .getAll()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchItem'].toLowerCase())
          );
      } else {
        this.foods =this.fls.getAll();
      }
    });
  }
}
