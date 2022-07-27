import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './core/product';
import data from './core/data.json' ;
import * as rxjs from 'rxjs'
import * as rxops from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList:Product[] = [];
  constructor(private http: HttpClient) { }
  getProducts() {
    /*let x: Array<Product> = [];
    this.httpClient.get<Product[]>('https://fakestoreapi.com/products/').toPromise<Product[]>().then((xz) =>{
      xz.forEach((ele) =>{
        x.push(ele)
      })
    });
    return x;*/
    return this.http.get<Product[]>('https://api.npoint.io/081354fa7e364b61f2bb')
    
  }

  ngOnIt(): void{
    this.getProducts().subscribe((response) => this.productList = response);
  }

  getProduct(id: number): Product {
    /*this.httpClient.get<Product[]>(`https://fakestoreapi.com/products/${id}`).toPromise<Product[]>().then((xz) =>{
      xz.forEach((ele) =>{
        this.sproduct.push(ele)
        console.log(ele)
        console.log(this.sproduct)
      })
    });
    return this.sproduct*/
    this.getProducts().subscribe((response) => this.productList = response);
    return this.productList[id]
  }

  static getProduct(id: number): Product {
    /*this.httpClient.get<Product[]>(`https://fakestoreapi.com/products/${id}`).toPromise<Product[]>().then((xz) =>{
      xz.forEach((ele) =>{
        this.sproduct.push(ele)
        console.log(ele)
        console.log(this.sproduct)
      })
    });
    return this.sproduct*/
    return data[id]
  }
}
