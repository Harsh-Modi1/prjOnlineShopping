//using System;
//using System.Collections.Generic;
//using System.Data;
//using System.Data.SqlClient;
//using System.Linq;
//using System.Net;
//using System.Net.Http;
//using System.Web.Http;
//using Microsoft.AspNetCore.Cors;
//using Microsoft.AspNetCore.Mvc;

//namespace OnlineShopping.Controllers
//{
//    public class RegisterController : ApiController
//    {
//        private readonly string connectionString = "Data Source=KenilModi;Initial Catalog=Dbonlineshopping;Integrated Security=False;Persist Security Info=False;User ID=sa;Password=kenil@123";
//        public class SaveResponseModel
//        {
//            public bool IsValid { get; set; }
//            public string Message { get; set; }
//        }

//        public class RegisterModel
//        {
            
//        }

//        private SaveResponseModel RegisterUserSP(RegisterModel registerModel)
//        {
//            var result = new SaveResponseModel();
//            using (SqlConnection conn = new SqlConnection(connectionString))
//            {
//                try
//                {
//                    conn.Open();
//                    SqlCommand cmd = new SqlCommand("RegisterUser", conn);
//                    cmd.CommandType = CommandType.StoredProcedure;
//                    cmd.Parameters.Add(new SqlParameter("@FirstName", registerModel.FirstName));
//                    cmd.Parameters.Add(new SqlParameter("@LastName", registerModel.LastName));
//                    cmd.Parameters.Add(new SqlParameter("@Email", registerModel.Email));
//                    cmd.Parameters.Add(new SqlParameter("@MobileNumber", registerModel.MobileNo));
//                    cmd.Parameters.Add(new SqlParameter("@Password", registerModel.Password));
//                    cmd.Parameters.Add(new SqlParameter("@Role", registerModel.Role));
//                    cmd.Parameters.Add(new SqlParameter("@Status", registerModel.Status));
//                    cmd.Parameters.Add(new SqlParameter("@Gender", registerModel.Gender));
//                    cmd.Parameters.Add(new SqlParameter("@CreatedOn", registerModel.CreatedOn));
//                    using (SqlDataReader rdr = cmd.ExecuteReader())
//                    {
//                        result.IsValid = true;
//                        result.Message = "Data Saved Successfully.";
//                        while (rdr.Read())
//                        {
//                            return result;
//                        }
//                    }
//                }
//                catch (Exception ex)
//                {
//                    result.IsValid = false;
//                    result.Message = ex.Message;
//                }
//            }
//            return result;
//        }

//        [System.Web.Http.HttpPost]
//        public IActionResult RegisterUser(RegisterModel registerModel)
//        {
//            var response = RegisterUserSP(registerModel);
//            return Ok(response);
//        }
//    }
//}
