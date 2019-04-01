import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "products", component: ProductsComponent },
  { path: "products/:id", component: ProductDetailComponent },
  { path: "cart", component: CartComponent },
  { path: "category", component: ProductCategoryComponent },
  { path: "product-detail", component: ProductDetailComponent },
  { path: "register-user", component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
