import { Component, OnInit } from '@angular/core';
import { RavenclawService } from '../../services/ravenclaw.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-ravenclaw',
  templateUrl: './ravenclaw.component.html',
  styles: [],
  providers: [RavenclawService]
})
export class RavenclawComponent implements OnInit {

  public titulo:string;
    public houses:any;
    p: number = 1;
    public students:any;

  constructor(

    private _route: ActivatedRoute,
        private _router: Router,
        private _houseService: RavenclawService,
  ) { 
    this.titulo= 'HOUSE OF RAVENCLAW'
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
