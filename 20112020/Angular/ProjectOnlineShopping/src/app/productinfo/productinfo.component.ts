import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { productservice } from 'src/services/productservice';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {

  selectedinfo;
  proid;

  constructor(private proservice:productservice,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params:ParamMap) =>{
      this.proid=parseInt(params.get('id'));
      console.log(this.proid);
    });
    this.callSelectedProduct()

  }

  callSelectedProduct()
  {
    this.selectedinfo=this.proservice.getProductInfo(this.proid);
  }

}
