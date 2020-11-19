import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Products} from 'src/models/Products.model';

@Injectable({ providedIn: "root" })
export class productservice{
    cart:Products[];
    product:Products[];
    constructor(private http: HttpClient) {
        this.cart=[];
}

readonly uri = "https://localhost:44386/api/Products/";
getProduct(){
    return this.http.get(this.uri);
}

insertProduct(prod){
    return this.http.post(this.uri,prod);
}

//delete
deleteProduct(id){
    return this.http.delete(this.uri + id);

}
//put
public putProduct(product:Products){
    return this.http.put(this.uri + product.ProductID, product)

}

public getProductbyid(id)
{
    return this.http.get(this.uri+id);
}

public updateProduct(product:Products)
{
    return this.http.put(this.uri+product.ProductID,product)
}


/*public addToCartService(product:Products)
{
    //If the product already exist in cart adding quantity alone
    let flag=0;
    for (let index=0;index <this.cart.length;index++){
        if(this.cart[index].ProductID == product.ProductID)
        {
            flag = 1;
            this.cart[index].Quantity++;
            break;
        }
    }
    
    //if product not exist in cart add the product to cart
    if(flag ==0)
    this.cart.push(product);

    //to reduce the original quantity in products array
    for(let index = 0;index <this.product.length;index++){
    if(this.product[index].ProductID == product.ProductID)
    {
        this.product[index].Quantity--;
    } 
}
}
//Removing item from cart
removeItemfromCartservice(pro)
{
    console.log("service:remove item",pro);
    for(let i=0;i<this.cart.length;i++)
    {
        if(this.cart[i].ProductID==pro.ProductID)
        {
            console.log("inside first if")
            if(pro.Quantity>1)
            {
                this.cart[i].Quantity--;
            }
            else if(pro.Quantity==1)
            {
                this.cart.splice(i,1);
            }
        }
    }
    //incrementing quantity to list
    for(let index=0;index<this.product.length;index++)
    {
        if(this.product[index].ProductID==pro.ProductID)
        {
            this.product[index].Quantity++;
            console.log("after remove quantity"+this.product[index].Quantity)
        }
    }
}
*/
}