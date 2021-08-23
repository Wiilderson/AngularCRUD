import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

   productName: any;
   productPreco: number; 
   productId: number;

   constructor(
      private productService: ProductService,
      private router: Router,
      private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
        const convertId = parseInt(id);
        this.productService.readById(convertId).subscribe((product) => {
         this.productName = product["name"];
         this.productPreco = product["preco"];
         this.productId = product["id"];
      });
   }

   deleteProduct(): void {
      this.product = {
         id: this.productId,
         name: this.productName,
         preco: this.productPreco,
      };

      this.productService.delete(this.product).subscribe(() => {
         this.productService.showMessage("Deletado com sucesso");
         this.router.navigate(["/Products"]);
      });
   }

   cancel(): void {
      this.router.navigate(["/Products"]);
   }
}