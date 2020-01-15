import { Component, OnInit } from '@angular/core';
import { GryffindorService } from '../../services/gryffindor.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styles: [],
  providers: [GryffindorService]
})
export class GryffindorComponent implements OnInit {

  public titulo:string;
    public houses:any;
    p: number = 1;
    public students:any;

  constructor(

    private _route: ActivatedRoute,
        private _router: Router,
        private _houseService: GryffindorService,
  ) { 
    this.titulo= 'HOUSE OF GRYFFINDOR';
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
