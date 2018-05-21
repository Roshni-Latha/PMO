using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApi.Common
{
    public class ProjectTrackContext : DbContext
    {
        public ProjectTrackContext() : base("Data Source=DESKTOP-KCQLIS7\\SQLEXPRESS;Initial Catalog=WebAPIDataBase;Integrated Security=True")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<ProjectTask> Tasks { get; set; }
        public DbSet<UserStory> UserStories { get; set; }
        public DbSet<ManagerComment> ManagerComments { get; set; }
    }
}