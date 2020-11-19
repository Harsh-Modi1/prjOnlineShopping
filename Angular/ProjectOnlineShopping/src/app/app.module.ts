import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { productservice } from 'src/services/productservice';

import{HttpClientModule} from '@angular/common/http';
import { ProductlistComponent } from './productlist/productlist.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ProductCrudComponent,
    LoginComponent,
    RegistrationComponent,
    ProductlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   // BrowserAnimationsModule,
    //MatDialogModule

  ],

  providers: [productservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
