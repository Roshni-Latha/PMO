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
    public class ManagerCommentController : ApiController
    {
        ProjectTrackContext db = new ProjectTrackContext();
        ManagerCommentRepository repository = new ManagerCommentRepository();

        // GET: api/ManagerComment
        public IEnumerable<ManagerComment> Get()
        {
            return repository.GetAllManagerComments();
        }

        // GET: api/ManagerComment/5
        public ManagerComment Get(int id)
        {
            return repository.SearchManagerCommentById(id);
        }

        [Route("api/ManagerComment/GetByTaskId/{id}")]
        public IEnumerable<ManagerComment> GetByTaskId(int id)
        {
            return repository.SearchManagerCommentByTaskId(id);
        }
        // POST: api/ManagerComment
        public void Post(ManagerComment value)
        {
            repository.CreateNewManagerComment(value);
        }

        // PUT: api/ManagerComment/5
        public void Put(int id, ManagerComment value)
        {
            repository.EditManagerComment(id,value);
        }

        // DELETE: api/ManagerComment/5
        public void Delete(int id)
        {
            repository.DeleteManagerCommentById(id);
        }
    }
}
