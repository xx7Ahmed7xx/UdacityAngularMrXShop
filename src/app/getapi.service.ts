import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  private url = 'https://fakestoreapi.com/products/';
   
  constructor(private httpClient: HttpClient) { }
  
  getClothes(){
    return this.httpClient.get(this.url);
  }
  
}