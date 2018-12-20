import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NavbarComponent,
    ProductCardComponent,
    ProductDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "login", component: LoginComponent },
      { path: "products", component: ProductsComponent },
      { path: "products/:id", component: ProductDetailComponent }
    ])
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
