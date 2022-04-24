import { Product } from '../product.model';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements AfterViewInit {
  
  products: Product[]

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {
    
  }

  ngAfterViewInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }
}
