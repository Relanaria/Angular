import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';
import { catchError, map } from 'rxjs/operators';
import { forkJoin, throwError } from 'rxjs';
import { ProductLike } from '../interfaces/product-likes.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  options = {};
  apiURL = '/data/';
  constructor(private http: HttpClient) { }

  getOneProduct(id:string, section:string){
    return this.http.get<Product>(this.apiURL + `${section}/` + id);
  }

  likeProduct(productId: string, accessToken: string){
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': accessToken
      }
    }

    return this.http.post(this.apiURL + `/likes`, {productId}, this.options)
  }

  getLikeByUser(ownerId: string){
    const encodedId = encodeURIComponent(ownerId);
    return this.http.get<ProductLike>(this.apiURL + `likes?where=_ownerId%3D"${encodedId}"`)
  }

  getNumberOfLikes(productId: string){
    const encodedId = encodeURIComponent(productId);
    return this.http.get<ProductLike>(this.apiURL + `likes?where=productId%3D"${encodedId}"`)
  }

  getProductAndLike(id: string, section: string, ownerId: string, ) {
    const getProduct$ = this.getOneProduct(id, section);
    const likeProduct$ = this.getLikeByUser(ownerId);
  
    return forkJoin([getProduct$, likeProduct$]).pipe(
      map(([product, likeResponse]) => {
        return { product, likeResponse }; 
      })
    );
  }

  deleteProduct(productId: string, section: string,accessToken: string){
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': accessToken
      }
    }
    return this.http.delete(this.apiURL + section + `/${productId}`, this.options).pipe(
      catchError((error) => {
        return throwError(() => error); // Re-throw if you want to propagate the error
      })
    )
  }
}
