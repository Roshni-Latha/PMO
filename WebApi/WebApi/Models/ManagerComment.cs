using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class ManagerComment
    {
        [Key]
      
        public int commentId { get; set; }
      
        public string comment { get; set; }

        [ForeignKey("Task")]
        public int projTaskId { get; set; }
        public ProjectTask Task { get; set; }
    }
}
