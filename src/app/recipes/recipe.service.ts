import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Chole Bhature',
  //     'A super-tasty plate of Chole Bhature!',
  //     'https://indianambrosia.com/wp-content/uploads/2019/06/chole-bhature-2201.jpg',
  //     [
  //       new Ingredient('Bhature', 2),
  //       new Ingredient('Chole', 50)
  //     ]),
  //   new Recipe(
  //     'Indian Thali',
  //     'A super-tasty Indian Thali.',
  //     'https://tce-live2.s3.amazonaws.com/media/media/42bfb23f-38e3-4198-9336-5aa22b75093e.jpg',
  //     [
  //       new Ingredient('Chicken', 1),
  //       new Ingredient('Naan', 2),
  //       new Ingredient('Paneer', 1),
  //       new Ingredient('Samosa', 5)
  //     ])
  // ];

  private recipes: Recipe[] = [];

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();  // so that we dont get the actual array object, just get a copy
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.shoppingListService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
