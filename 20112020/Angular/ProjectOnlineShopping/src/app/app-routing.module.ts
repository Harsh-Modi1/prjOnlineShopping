import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {path:"productlist",component:ProductlistComponent},
{path:"productcrud",component:ProductCrudComponent},
{path:'productinfo/:id',component:ProductinfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
