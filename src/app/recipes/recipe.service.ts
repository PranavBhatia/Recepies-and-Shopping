import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'A dummy kind of description', 'https://www.bbcgoodfood.com/sites/default/files/' +
      'categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
    new Recipe('Test Recipe 2', 'A dummy kind of description', 'https://www.bbcgoodfood.com/sites/default/files/' +
      'categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();  // so that we dont get the actual array object, just get a copy
  }
}
