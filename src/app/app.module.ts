import { UserService } from './services/user.service';
import { CartService } from './services/cart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';

import { httpAuthInterceptorProvider } from './auth-interceptor';
import { LoginComponent } from './login/login.component';
import { ManageProductComponent } from './admin/manage-product/manage-product.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LayoutLoginComponent } from './layouts/layout-login/layout-login.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    ProductCardComponent,
    ProductDetailComponent,
    LoginComponent,
    AdminLoginComponent,
    ProductCategoryComponent,
    CartComponent,
    CheckoutComponent,
    UserComponent,
    FooterComponent,
    ManageProductComponent,
    ProductListComponent,
    DefaultComponent,
    LayoutLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    CartService,
    UserService,
    httpAuthInterceptorProvider
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
