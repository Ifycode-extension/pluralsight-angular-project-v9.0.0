import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductPageComponent } from './product-page/product-page.component';

export const appRoutes: Routes = [
  { path: 'product', component: ProductListComponent },
  { path: 'product/description', component: ProductPageComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' }
]
