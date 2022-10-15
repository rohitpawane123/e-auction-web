import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SellerServiceService {
  constructor(private httpCleint: HttpClient) {}

  getAllSellerProducts() {
    return this.httpCleint.get('https://seller-service.azurewebsites.net/api/list-all-products?code=g_TVavwfcgypuvME5GLnaVxfBqFagmZm2Brsry71MJZuAzFuo_e-8w==');
  }
}
