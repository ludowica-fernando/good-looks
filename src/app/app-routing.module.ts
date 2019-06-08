import { CheckoutComponent } from './checkout/checkout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { LoginComponent } from './login/login.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProductsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'category', component: ProductCategoryComponent },
    ]
  },

  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      { path: 'register-user', component: UserComponent },
      { path: 'login', component: LoginComponent },
      { path: 'admin/login', component: AdminLoginComponent },
    ]
  },

  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard, AdminGuard],
    children: [
      { path: 'admin/manage-products', component: ProductListComponent },
      { path: 'admin/manage-products/new', component: ManageProductComponent },
      { path: 'admin/manage-products/:id', component: ManageProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
