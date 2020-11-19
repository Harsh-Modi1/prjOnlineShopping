import { Component, OnInit } from '@angular/core';
import { productservice } from 'src/services/productservice';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private prodservice:productservice) { }

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

}
