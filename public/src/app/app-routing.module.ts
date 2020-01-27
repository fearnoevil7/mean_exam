import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent } from './new/new.component';
import { PetsComponent } from './pets/pets.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'pets', component: PetsComponent},
  { path: 'pets/new', component: NewComponent},
  { path: 'pets/:id', component: ShowComponent },
  { path: 'pets/edit/:id', component: EditComponent },
  { path: '', pathMatch: 'full', redirectTo:'/' },
  { path: '**', pathMatch: 'full', redirectTo:'/pets' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
