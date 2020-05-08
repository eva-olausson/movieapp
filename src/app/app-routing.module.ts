import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent }  from './movie-details/movie-details.component';
import { MovieSearchComponent }  from './movie-search/movie-search.component';
import { HomepageComponent }  from './homepage/homepage.component';



const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'home/:id', component: MovieDetailsComponent},  
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
