using WebApi.Common;
using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Repository
{
    public class UserStoryRepository
    {
        ProjectTrackContext db = new ProjectTrackContext();

        public List<UserStory> GetAllUserStories()
        {
            return db.UserStories.Select(story => story).ToList();
        }

        public bool CreateNewUserStory(UserStory story)
        {
            db.UserStories.Add(story);
            db.SaveChanges();
            return true;
        }

        public UserStory SearchUserStoryById(int id)
        {
            return db.UserStories.Select(story => story).Where(story => story.userStoryId == id)
                .FirstOrDefault();
        }

        public UserStory SearchUserStoryByName(string story)
        {
            return db.UserStories.Where(uStory => uStory.story == story).FirstOrDefault();
        }

        public bool DeleteUserStory(int id)
        {
            var userStory = db.UserStories.Where(story => story.userStoryId == id).FirstOrDefault();
            db.UserStories.Remove(userStory);
            db.SaveChanges();
            return true;
        }


        public bool EditUserStory(int id, UserStory story)
        {
            var userStory = db.UserStories.Where(ustory => ustory.userStoryId == id).FirstOrDefault();

            userStory.story = story.story;
            userStory.projId = story.projId;

            db.SaveChanges();
            return true;
        }
    }
}