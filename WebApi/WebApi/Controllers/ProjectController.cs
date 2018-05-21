using WebApi.Common;
using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApi.Repository;

namespace WebApi.Controllers
{
    public class ProjectController : ApiController
    {
        ProjectTrackContext db = new ProjectTrackContext();
        ProjectRepository repository = new ProjectRepository();
        // GET: api/Project
        public IEnumerable<Project> Get()
        {
            return db.Projects.ToList();
        }

        // GET: api/Project/5
        public Project Get(int id)
        {
            var proj = repository.SearchProjectById(id);
            return proj;
        }

        // POST: api/Project
        public void Post(Project value)
        {
            repository.CreateNewProject(value);
        }

        // PUT: api/Project/5
        public void Put(int id, Project value)
        {
            repository.EditProject(id, value);
        }

        // DELETE: api/Project/5
        public void Delete(int id)
        {
        }
    }
}
