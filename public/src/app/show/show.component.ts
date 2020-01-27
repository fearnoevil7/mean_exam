import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  id: {};
  my_id: string;
  pet: {};
  submitted: boolean;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("*******Show Component Params********", params['id'])
      this.id = {id: params['id']};
      this.my_id = params['id'];
    })
    this.submitted = false;
    this.showPet();
  }

  showPet(){
    console.log("*******showPet ID Test", this.id);
    let observable = this._httpService.getPet(this.id['id']);
    observable.subscribe(data => {
      this.pet = data;
      console.log("Got our pet", this.pet);
    })
  }


  sendToDestroy(){
    console.log("******testing sendToDestroy", this.id['id']);
    let observable = this._httpService.destroy(this.id['id']);
    observable.subscribe(data => {
      this.goHome();
    })
  }
  goHome() {
    this._router.navigate(['']);
  }
  processLike(){
    this.submitted = true;
    let observable = this._httpService.like(this.id['id']);
    observable.subscribe(data => {
      console.log("*****like retrieved", data)
      // this.goHome();
      this.pet = data;
      console.log(this.pet)
      this.showPet();
    })
  }
  oneTime(){
  }
}
