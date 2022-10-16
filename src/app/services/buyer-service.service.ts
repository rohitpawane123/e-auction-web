import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BuyerServiceService {
  constructor(private httpClient: HttpClient) {}

  getAllBids() {
    return this.httpClient.get(
      'https://buyers-service.azurewebsites.net/api/get-all-bids?code=0oQvBlSeMfFEUxnzb9XDJPr97Gitg29SJ30Q4UEGl4FeAzFuwuQLNQ=='
    );
  }
}
