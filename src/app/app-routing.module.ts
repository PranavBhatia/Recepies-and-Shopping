import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeBookComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipeBookComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
  // {path: '**', redirectTo: ''} // Should always be the last route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
