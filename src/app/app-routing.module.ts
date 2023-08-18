import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListsComponent } from './user-lists/user-lists.component';
import { TVShowComponent } from './tvshow/tvshow.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ReviewGram Home'
  }, 
  {
    path:'user',
    component: CreateUserComponent,
    title: 'Create User'
  },
  {
    path: 'userList/:user-id',
    component: UserListsComponent,
    title: 'User Lists'
  },
  {
    path: 'tv/:tmdb_id',
    component: TVShowComponent,
    title: 'TV Show details'
  },
  {
    path: 'movie/:tmdb_id',
    component: MovieComponent,
    title: 'Movie details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
