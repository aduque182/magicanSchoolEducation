import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './house/home/home.component';
import { GryffindorComponent } from './house/houses/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './house/houses/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './house/houses/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './house/houses/slytherin/slytherin.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'gryffindor', component: GryffindorComponent},
  {path: 'hufflepuff', component: HufflepuffComponent},
  {path: 'ravenclaw', component: RavenclawComponent},
  {path: 'slytherin', component: SlytherinComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
