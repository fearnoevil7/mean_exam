import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { orderBy } from 'lodash';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from, pipe } from 'rxjs';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css'],
})
export class PetsComponent implements OnInit {
  pets: any;
  my_errors: {};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getPetsFromService();
  }

  getPetsFromService(){
    let observable = this._httpService.getPets();
    observable.subscribe(data => {
      console.log("Got our pets!", data);
      this.pets = data;
      console.log(this.pets);
    })
  }

  
}
