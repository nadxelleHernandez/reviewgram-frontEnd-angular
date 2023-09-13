import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
import { UserListsComponent } from './pages/user-lists/user-lists.component';
import { MediaComponent } from './pages/media/media.component';

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
    component: MediaComponent,
    title: 'TV Show details'
  },
  {
    path: 'movies/:tmdb_id',
    component: MediaComponent,
    title: 'Movie details'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
