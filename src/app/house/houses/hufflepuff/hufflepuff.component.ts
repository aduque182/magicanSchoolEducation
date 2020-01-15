import { Component, OnInit } from '@angular/core';
import { HufflepuffService } from '../../services/Hufflepuff.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styles: [],
  providers: [HufflepuffService]
})
export class HufflepuffComponent implements OnInit {

  public titulo:string;
    public houses:any;
    p: number = 1;
    public students:any;

  constructor(

    private _route: ActivatedRoute,
        private _router: Router,
        private _houseService: HufflepuffService,
  ) { 
    this.titulo= 'HOUSE OF HUFFLEPUFF';
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
