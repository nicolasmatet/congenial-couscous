import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LandingGridComponent} from "./landing-grid/landing-grid.component";
import {AnimalPageComponent} from "./animal-page/animal-page.component";
import {AnimalSelectionComponent} from "./animal-selection/animal-selection.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/all',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: LandingPageComponent,
    children: [
      {
        path: 'all',
        component: LandingGridComponent,
      },
      {
        path: 'animal',
        component: AnimalPageComponent,
      }
    ]
  },
  {
    path: 'selection',
    component: AnimalSelectionComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
