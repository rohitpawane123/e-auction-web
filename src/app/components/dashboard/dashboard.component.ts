import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from 'src/app/services/seller-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private seller: SellerServiceService) {
    this.seller.getAllSellerProducts().subscribe((res) => {
      console.log('Service Result', [res]);
    });
  }

  ngOnInit(): void {}

  title = 'e-AuctionApp';

  options: any = [
    { Id: 1, Value: 'Product 1' },
    { Id: 2, Value: 'Product 2' },
    { Id: 3, Value: 'Product 3' },
    { Id: 4, Value: 'Product 4' },
    { Id: 5, Value: 'Product 5' },
    { Id: 6, Value: 'Product 6' },
  ];
}
