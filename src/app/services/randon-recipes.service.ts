import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RandonRecipesService {

  constructor(private http: HttpClient) { }

  listRandonFood(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=9e0671bf89874d48902d7216d5fac10c&number=${take}`

    return this.http.get(apiUrl)
  }
}
