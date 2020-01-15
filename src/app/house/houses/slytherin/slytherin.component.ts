import { Component, OnInit } from '@angular/core';
import { SlytherinService } from '../../services/slytherin.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-slytherin',
  templateUrl: './slytherin.component.html',
  styles: [],
  providers: [SlytherinService]
})
export class SlytherinComponent implements OnInit {

  public titulo:string;
    public houses:any;
    p: number = 1;
    public students:any;

  constructor(

    private _route: ActivatedRoute,
        private _router: Router,
        private _houseService: SlytherinService,
  ) { 
    this.titulo= 'HOUSE OF SLYTHERIN'
   }

  ngOnInit() {

       this._houseService.getListOfHouse().subscribe(

        (result)=> {
          this.students = (result);
          const a =(this.students); 

    
        },
        error => {
    console.log(<any>error);
        }
       )

       this._houseService.getInfOfHouse().subscribe(

        (result)=> {
          this.houses = (result);
          const a =(this.houses); 
    
        },
        error => {
    console.log(<any>error);
        }
       )
    }

}
