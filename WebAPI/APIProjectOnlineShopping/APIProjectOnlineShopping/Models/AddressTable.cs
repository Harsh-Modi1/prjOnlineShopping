//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace APIProjectOnlineShopping.Models
{
    using System;
    using System.Collections.Generic;
    using System.Runtime.Serialization;

    [DataContract]

    public partial class AddressTable
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AddressTable()
        {
            this.OrderTables = new HashSet<OrderTable>();
            this.RetailerTables = new HashSet<RetailerTable>();
            this.UserTables = new HashSet<UserTable>();
        }
        [DataMember]

        public int AddressID { get; set; }
        [DataMember]

        public string AddressLine1 { get; set; }
        [DataMember]

        public string AddressLine2 { get; set; }
        [DataMember]

        public string City { get; set; }
        [DataMember]

        public string State { get; set; }
        [DataMember]

        public string Country { get; set; }
        [DataMember]

        public Nullable<int> ZipCode { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrderTable> OrderTables { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RetailerTable> RetailerTables { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<UserTable> UserTables { get; set; }
    }
}
