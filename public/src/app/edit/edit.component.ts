import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: {};
  pet: {};
  my_errors: [];
  unique_error: {};
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=> {
      console.log("*******Edit Component Params*******", params['id'])
      this.id = {id: params['id']}
    })
    // this.pet = {
    //   name: "",
    //   type: "",
    //   description: "",
    //   skill1: "",
    //   skill2: "",
    //   skill3: "",
    // }
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

  sendToUpdate(){
    let observable = this._httpService.update(this.pet)
    observable.subscribe(data => {
      console.log("*******sendtoupdate", data);
      if("errors" in data){
        console.log("errors", data);
        this.my_errors = data;
      }
      if (data['unique']){
        console.log("*****Unique: ", data)
        this.unique_error = data['unique'];
        console.log(this.unique_error);
      }
    })
  }
// }else {
//   this.pet = data;
//   this.goToShow();
// }
  goToShow(){
    this._router.navigate(['/pets/' + this.id['id']])
  }
}
