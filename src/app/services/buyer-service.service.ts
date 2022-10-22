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

  getAllBidsByProductId(id: any) {
    return this.httpClient.get(
      'https://buyers-service.azurewebsites.net/api/get-all-bids-by-productid/' +
        id +
        '?code=FBM-dU_SM-5InQn_-bAjqAIga_j7TFTiXm9eh18tgsXyAzFuuF4n4A=='
    );
  }
}
