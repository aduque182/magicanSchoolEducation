import { Injectable } from '@angular/core';
//import {HttpClient} from '@angular/common/http'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment';
import { Student } from 'src/app/models/student.model';
import { House } from 'src/app/models/house.model';
import { HomeComponent } from 'src/app/house/home/home.component';


@Injectable({
  providedIn: 'root'
})
export class GryffindorService {
  private url: string;
  private apiKey: string;
  private houseName: string;
  private houseId: string;

  constructor(

    public _http: Http,

  ) {

    this.url = environment.baseURL;
    this.apiKey = environment.apiKey;
    this.houseName = "Gryffindor";
    this.houseId = "5a05e2b252f721a3cf2ea33f";

  }

  getListOfHouse(): Observable<Student[]> {
    
    return this._http.get(this.url + 'characters?' + 'key=' + this.apiKey + '&house=' + this.houseName).map(res => res.json());
  }

  getInfOfHouse(): Observable<House[]> {

    
    return this._http.get(this.url + 'houses/' + this.houseId + '/?' + 'key=' + this.apiKey + '&house=').map(res => res.json());
  }

  
}
