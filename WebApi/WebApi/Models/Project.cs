using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class Project
    {
        [Key]
        public int projId { get; set; }
        public string projName { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public string clientName { get; set; }
    }
}