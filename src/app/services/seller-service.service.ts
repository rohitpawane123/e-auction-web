import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SellerServiceService {
  constructor(private httpCleint: HttpClient) {}

  getAllSellerProducts() {
    return this.httpCleint.get(
      'https://sellers-service.azurewebsites.net/api/list-all-products?code=x6IdfHw_JoniA2WrsW5ajjUCkgkZat8Ndds2oKef1t8rAzFu_8r8nA=='
    );
  }

  getProductById(id: any) {
    return this.httpCleint.get(
      'https://sellers-service.azurewebsites.net/api/get-product-by-id/' +
        id +
        '?code=8Z58MaQS-0gb44S2F6Rj_2ZC-sULLmXuUCvYW-xffwjwAzFuIzFilw=='
    );
  }
}
