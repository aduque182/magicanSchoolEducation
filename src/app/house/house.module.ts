import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GryffindorComponent } from './houses/gryffindor/gryffindor.component';
import { RavenclawComponent } from './houses/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './houses/slytherin/slytherin.component';
import { HufflepuffComponent } from './houses/hufflepuff/hufflepuff.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    NgxPaginationModule
    

  ],
  declarations: [GryffindorComponent, RavenclawComponent, SlytherinComponent, HufflepuffComponent, HomeComponent]
})
export class HouseModule { }
