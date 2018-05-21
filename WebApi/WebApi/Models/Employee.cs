using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Employee
    {
        [Key]
       
        public int empId { get; set; }
        
        public string empName { get; set; }
    
        public string designation { get; set; }
        
        public int? contactNo { get; set; }
     
        public string emailId { get; set; }
       
        public string skillSet { get; set; }

        [ForeignKey("Manager")]
     
        public int? managerId { get; set; }
        [System.Runtime.Serialization.IgnoreDataMember]
        public Employee Manager { get; set; }
    }
}