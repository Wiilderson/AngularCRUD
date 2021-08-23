import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";

@Component({
   selector: "app-product-update",
   templateUrl: "./product-update.component.html",
   styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
   //product!: Product
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

   updateProduct(): void {
      this.product = {
         id: this.productId,
         name: this.productName,
         preco: this.productPreco,
      };

      this.productService.update(this.product).subscribe(() => {
         this.productService.showMessage("Atualizado com sucesso");
         this.router.navigate(["/Products"]);
      });
   }

   cancel(): void {
      this.router.navigate(["/Products"]);
   }
}
