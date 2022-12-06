import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { RandonRecipesService } from 'src/app/services/randon-recipes.service'
@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent {
  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;


  constructor(private service: RandonRecipesService) {}

  ngOnInit(): void {
    this.getFoods()
  }

  getFoods() {
    this.service.listRandonFood(6).pipe(
      finalize(()=> {
        this.loading = false;
      })
    ).subscribe((data: any)=> {
      console.log(data)
      this.foods = this.foods.concat(data.recipes)
    })
  }

  loadMore() {
    this.loadingMore = true;
    this.service.listRandonFood(3).pipe(
      finalize(()=> {
        this.loadingMore = false
      })
    ).subscribe((data: any)=> {
      this.foods = this.foods.concat(data.recipes)
    })
  }
}
