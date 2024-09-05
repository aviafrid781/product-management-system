import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CreateProductFormComponent } from './create-product-form/create-product-form.component';

export const routes: Routes = [
  {
    path: 'products-list',
    component: ProductsComponent,
  },
  {
    path: 'create-products-form',
    component: CreateProductFormComponent,
  },
  {
    path: 'update-products-form/:oid',
    component: CreateProductFormComponent,
  },
  {
    path: '',
    component: CreateProductFormComponent,
  },
];
