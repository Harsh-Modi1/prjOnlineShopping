using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using APIProjectOnlineShopping.Models;

namespace APIProjectOnlineShopping.Controllers
{
    public class CartController : ApiController
    {
        DbonlineshoppingEntities db = new DbonlineshoppingEntities();

        /*public HttpResponseMessage Post(Cart cart)
        {

            var cart1 = (from c in db.Carts
                        select new {
                            
                            productid = c.ProductID,
                            
                        });
            
            if(cart1 == null)
            {
                db.Carts.Add(cart);
                db.SaveChanges();

            }
            var flag = 0;
            for (var index = 0; index < cart1.Count(); index++)
            {
                if (cart.ProductID == cart1.)
                {
                    flag = 1;
                    cart.Quantity++;
                    break;
                }
            }
        }*/
        public HttpResponseMessage GetCart()
        {
            return Request.CreateResponse(HttpStatusCode.OK, db.Carts);
        }

        public HttpResponseMessage AddCart(Cart cart)
        {
            
            /*var TotalPrice = (from c in db.Carts
                          where c.ProductID == Id
                          select c.TotalPrice).First();*/
           var cart1 = (from c in db.Carts
                         select new
                         {
                             productid = c.ProductID,

                         }).ToList();

            dynamic car = db.Carts.Find(cart.ProductID);
            
            var flag = 0;
            for (var index = 0; index < cart1.Count(); index++)
            {
                
                if (car == cart.ProductID)
                {
                    flag = 1;
                    cart.Quantity++;
                    break;
                }
            }

            // If Product not exist in cart add the product to cart
            if (cart1 == null)
            {
                db.Carts.Add(cart);
                db.SaveChanges();
            }
            //    //to reduce the original quantity in products array
            /*var prod1 = (from c in db.Products
                         select new
                         {
                             productid = c.ProductID,

                         }).ToList();

            dynamic pro = db.Products.Find(db.Products).ProductID;
            for (var index = 0; index < prod1.Count() ; index++)
            {
                if (this.product[index].ProductID == product.ProductID)
                {
                   
                }
            }*/

            return Request.CreateResponse(HttpStatusCode.OK, cart);



        }
    }
}
