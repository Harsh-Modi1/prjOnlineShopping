import { Component, OnInit } from '@angular/core';
import {Products} from 'src/models/Products.model';
import {productservice} from 'src/services/productservice';
import{NgForm} from '@angular/forms';
import { categoryservice } from 'src/services/category.service';
import { Categories } from 'src/models/category.model';
import { UploadImageService } from 'src/services/upload-image.service';
//import { MatDialog,MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {
categorylist:Categories[];
imageUrl: string = "/assets/img/depositphotos_70266973-stock-illustration-upload-web-icon.jpg";
fileToUpload: File = null;

  constructor(private prodservice:productservice,
    private catservice:categoryservice,
    private imageService:UploadImageService
    //private dialog:MatDialog
    ) { }

  ngOnInit(){
    this.fetchProd();
    this.catservice.getcategorylist().then(res => this.categorylist=res as Categories[] );
   //this.fetchCategbyid(id);

  }
  
 /* AddoreditProduct(){
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="50%";
    this.dialog.open(ProductCrudComponent,dialogConfig)
  }*/
  //Get Method
  products;
  fetchProd()
  {
    this.prodservice.getProduct().subscribe((data)=>{
      this.products = data;console.table(this.products);
     // console.(data);
    })
  }
  categ;
  /*fetchCategbyid(id)
  {
    this.catservice.getCategorybyid(id).subscribe((data)=>{this.categ=data;})
  }*/


  //Post Method
  prod: any = {};
  result;
  addProduct() {
   // console.log(this.prod);
    this.prodservice.insertProduct(this.prod).subscribe((data) => { this.result = data; })
    window.alert("Products are Added");
    //to see the changed data  without  reloading the page
    this.fetchProd();
  }

  ////Delete 
  removeProd(id) {
    this.prodservice.deleteProduct(id).subscribe((data)=>{this.result=data;})
    window.alert("Products are Deleted!!!");
  }
//Fetching particular Product details
  getparticularProduct(id)
  {
   // debugger;
   this.prodservice.getProductbyid(id).subscribe((data)=>{ this.prod=data;})
 
  }
  updateparticularProd(Prod:Products)
  {
    //console.log(Prod);
    this.prodservice.updateProduct(Prod).subscribe((data)=>{this.result=data;})
    window.alert("Product Updated!!!");
  }
  
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption,Image){
    this.imageService.postFile(Caption.value,this.fileToUpload).subscribe(
      data =>{
        console.log('done');
        Caption.value = null;
        Image.value = null;
        this.imageUrl = "/assets/img/depositphotos_70266973-stock-illustration-upload-web-icon.jpg";
      }
    );
   }

}
