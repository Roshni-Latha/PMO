using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApi.Models
{
    public class UserStory
    {
        [Key]
        public int userStoryId { get; set; }
        public string story { get; set; }

        [ForeignKey("Project")]
        public int projId { get; set; }
        public Project Project { get; set; }
    }
}