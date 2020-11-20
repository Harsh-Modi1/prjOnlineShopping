import { Component, OnInit } from '@angular/core';
import { categoryservice } from 'src/services/category.service';
import { productservice } from 'src/services/productservice';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private prodservice:productservice,
    private catservice:categoryservice) { }

  ngOnInit(){
    
    this.fetchProd();

  }

   //Get Method
   products;
   fetchProd()
   {
     this.prodservice.getProduct().subscribe((data)=>{
       this.products = data;
      // console.log(data);
     })
   }

   categ;
  fetchCateg()
  {
    this.catservice.getCategory().subscribe((data)=>{this.categ=data;})
  }


}
