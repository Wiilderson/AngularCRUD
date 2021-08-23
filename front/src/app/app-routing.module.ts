import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Products', component: ProductCrudComponent },
  { path: 'prodiucts/creat', component: ProductCreateComponent },
  { path: 'products/update/:id', component: ProductUpdateComponent },
  { path: 'products/delete/:id', component: ProductDeleteComponent },
  { path: 'products/read', component: ProductReadComponent },
]
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
