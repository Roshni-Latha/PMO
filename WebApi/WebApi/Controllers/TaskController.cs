using WebApi.Common;
using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using WebApi.Repository;

namespace WebApi.Controllers
{
    public class TaskController : ApiController
    {
        TaskRepository repository = new TaskRepository();
        ProjectTrackContext db = new ProjectTrackContext();

        // GET: api/Task
        public IEnumerable<ProjectTask> Get()
        {
            return db.Tasks.ToList();
        }

        // GET: api/Task/5
        public ProjectTask Get(int id)
        {
            var projtask = repository.SearchTasktById(id);
            return projtask;
        }

        // POST: api/Task
        public void Post(ProjectTask value)
        {
            repository.CreateNewTask(value);
        }

        // PUT: api/Task/5
        public void Put(int id, ProjectTask value)
        {
            repository.EditTask(id, value);
        }

        // DELETE: api/Task/5
        public void Delete(int id)
        {
            repository.DeleteTask(id);
        }
    }
}
