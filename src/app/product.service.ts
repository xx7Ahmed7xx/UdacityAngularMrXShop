import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './core/product';
import data from './core/data.json' ;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productList:{id:number, title:string, image:string, price:number}[] = data;
  constructor() { }
  getProducts(): Product[] {
    /*let x: Array<Product> = [];
    this.httpClient.get<Product[]>('https://fakestoreapi.com/products/').toPromise<Product[]>().then((xz) =>{
      xz.forEach((ele) =>{
        x.push(ele)
      })
    });
    return x;*/
    return this.productList;
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
