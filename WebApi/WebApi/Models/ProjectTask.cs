using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class ProjectTask
    {
        [Key]
        public int taskId { get; set; }
        public DateTime startDate { get; set; }
        public DateTime endDate { get; set; }
        public DateTime? completion { get; set; }

        [ForeignKey("Employee")]
        public int empId { get; set; }
        public Employee Employee { get; set; }

        [ForeignKey("UserStory")]
        public int userStoryId { get; set; }
        public UserStory UserStory { get; set; }
    }
}