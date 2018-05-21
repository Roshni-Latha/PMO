using WebApi.Common;
using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Repository
{
    public class TaskRepository
    {
        ProjectTrackContext db = new ProjectTrackContext();

        public List<ProjectTask> GetAllTasks()
        {
            return db.Tasks.Select(task => task).ToList();
        }

        public bool CreateNewTask(ProjectTask task)
        {
            db.Tasks.Add(task);
            db.SaveChanges();
            return true;
        }

        public ProjectTask SearchTasktById(int id)
        {
            return db.Tasks.Select(task => task).Where(task => task.taskId == id).FirstOrDefault();

        }

        public bool DeleteTask(int id)
        {
            var projTask = db.Tasks.Where(task => task.taskId == id).FirstOrDefault();
            db.Tasks.Remove(projTask);
            db.SaveChanges();
            return true;
        }


        public bool EditTask(int id, ProjectTask task)
        {
            var pTask = db.Tasks.Where(projtask => projtask.taskId == id).FirstOrDefault();

            pTask.empId = task.empId;
            pTask.endDate = task.endDate;
            pTask.startDate = task.startDate;
            pTask.completion = task.completion;
            pTask.userStoryId = task.userStoryId;

            db.SaveChanges();
            return true;
        }
    }
}