import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  ids:any
  constructor(private http:HttpClient) { }

  product(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  productDetails(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}
