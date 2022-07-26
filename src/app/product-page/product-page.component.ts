import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../core/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  
  public product: Product | undefined ;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProduct(id-1) // TODO refactor to getter
  }
  ngOnInit() {
    this.getProduct();
  }
}
