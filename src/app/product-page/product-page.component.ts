import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() notes: string = "";
  @Output() notesChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  notesChanged(args : any){
    this.notes = args;
  }


  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProducts().subscribe(products => this.product = products[id]);
  }
  ngOnInit() {
    this.getProduct();
  }
}
