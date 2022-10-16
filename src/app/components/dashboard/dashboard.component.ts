import { Component, OnInit } from '@angular/core';
import { SellerServiceService } from 'src/app/services/seller-service.service';

export interface SellerProduct {
  address: string;
  bidEndDate: string;
  category: string;
  city: string;
  detailedDescription: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  pin: string;
  productId: string;
  productName: string;
  shortDescription: string;
  startingPrice: string;
  state: string;
}

export interface productTable {
  address: string;
  bidEndDate: string;
  productId: string;
  productName: string;
}

export interface productList {
  productId: string;
  productName: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  val: any = [];

  sprod: any = [];

  allProducts: productList[] = [];

  selectedProduct: string = '';

  singleRecord: any;

  allBuyerProducts: productTable[] = [];

  constructor(private seller: SellerServiceService) {
    this.seller.getAllSellerProducts().subscribe((res) => {
      this.val = res;
      for (let index = 0; index < this.val.result.value.length; index++) {
        this.allBuyerProducts.push({
          productId: this.val.result.value[index].productId,
          productName: this.val.result.value[index].productName,
          address: this.val.result.value[index].address,
          bidEndDate: this.val.result.value[index].bidEndDate,
        });

        this.allProducts.push({
          productId: this.val.result.value[index].productId,
          productName: this.val.result.value[index].productName,
        });
      }
      //Object.assign(this.sprod, this.val.result.value[0]);
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

  getSelectedProduct(selectedProduct: string) {
    console.log('Selected Product', [this.selectedProduct]);
    if (selectedProduct === '0') {
      this.sprod = [];
    } else {
      this.seller.getProductById(selectedProduct).subscribe((res) => {
        this.singleRecord = res;
        Object.assign(this.sprod, this.singleRecord.result.value[0]);
        console.log('Fetched Product By Id', [this.sprod]);
      });
    }
  }
}
