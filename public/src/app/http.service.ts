import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets(){
    return this._http.get("/app/pets");
  }

  getPet(id){
    console.log("*******HTTP pet id", id);
    return this._http.get("/app/pets/" + id);
  }

  create(newPet){
    console.log("*****addPet test******", newPet)
    return this._http.post('/app/pet', newPet);
  }
  update(pet){
    return this._http.put('/app/pet', pet);
  }
  destroy(id){
    console.log("Testing Http*******", id)
    return this._http.delete('/app/destroy/' + id);
  }
  like(id){
    return this._http.get('/app/like/' + id);
  }
}
