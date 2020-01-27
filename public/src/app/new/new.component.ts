import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import{ ActivatedRoute, Params, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;
  my_errors: {};
  unique_error: {};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.newPet = {
      name: "",
      type: "",
      description: "",
      skill1: "",
      skill2: "",
      skill3: "",
    }
  }

  addPet() {
    console.log("******add pet test", this.newPet)
    let observable = this._httpService.create(this.newPet);
    observable.subscribe(data => {
      console.log("Got our data back from the post", data);
      if ("errors" in data){
        console.log("errors", data)
        this.my_errors = data
      }
      if (data['unique']){
        console.log("******Unique: ", data)
        this.unique_error = data['unique'];
        console.log(this.unique_error);
      }
      this.newPet = {
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: "",
      }
      // this.goHome();
    })
  }
  goHome() {
    this._router.navigate(['']);
  }
}
