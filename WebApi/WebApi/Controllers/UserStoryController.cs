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
    public class UserStoryController : ApiController
    {
        UserStoryRepository repository = new UserStoryRepository();
        ProjectTrackContext db = new ProjectTrackContext();

        // GET: api/UserStory
        public IEnumerable<UserStory> Get()
        {
            return db.UserStories.ToList();
        }

        // GET: api/UserStory/5
        public UserStory Get(int id)
        {
            var user = repository.SearchUserStoryById(id);
            return user;
        }

        // POST: api/UserStory
        public void Post(UserStory value)
        {
            repository.CreateNewUserStory(value);
        }

        // PUT: api/UserStory/5
        public void Put(int id, UserStory value)
        {
            repository.EditUserStory(id, value);
        }

        // DELETE: api/UserStory/5
        public void Delete(int id)
        {
            repository.DeleteUserStory(id);
        }
    }
}
