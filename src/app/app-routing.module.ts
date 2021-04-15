import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { CreateUpdateComponent } from './create-update/create-update.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'show',
    component: ShowComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'create-update',
    component: CreateUpdateComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
