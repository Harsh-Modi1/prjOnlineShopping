using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{
    public class registersController : ApiController
    {
        private DbonlineshoppingEntities1 db = new DbonlineshoppingEntities1();

           
        // POST: api/registers
        [HttpPost]
        public IHttpActionResult Postregister(register register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            UserTable userTable = new UserTable();
            userTable.FirstName = register.FirstName;
            userTable.LastName = register.LastName;
            userTable.Email = register.Email;
            userTable.MobileNumber = register.MobileNo;
            userTable.Password = register.Password;
            userTable.CreatedOn = DateTime.Now;
            userTable.Role = register.Role;
            userTable.Status = "NotApprove";
            userTable.Gender = register.Gender;

            
            db.UserTables.Add(userTable);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = register.Id }, register);
        }


      
    }
}