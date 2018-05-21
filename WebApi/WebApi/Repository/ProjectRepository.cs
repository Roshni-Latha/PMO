using WebApi.Common;
using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Repository
{
    public class ProjectRepository
    {
        ProjectTrackContext db = new ProjectTrackContext();

        public List<Project> GetAllProjects()
        {
            return db.Projects.Select(proj => proj).ToList();
        }

        public bool CreateNewProject(Project proj)
        {
            db.Projects.Add(proj);
            db.SaveChanges();
            return true;
        }

        public Project SearchProjectById(int id)
        {
            return db.Projects.Select(proj => proj).Where(proj => proj.projId == id).FirstOrDefault();

        }

        public Project SearchProjectByName(string name)
        {
            return db.Projects.Where(proj => proj.projName == name).FirstOrDefault();
        }

        public bool DeleteProject(int id)
        {
            var project = db.Projects.Where(proj => proj.projId == id).FirstOrDefault();
            db.Projects.Remove(project);
            db.SaveChanges();
            return true;
        }

        public bool EditProject(int id, Project prjct)
        {
            var proj = db.Projects.Where(project => project.projId == id).FirstOrDefault();

            proj.projName = prjct.projName;
            proj.startDate = prjct.startDate;
            proj.endDate = prjct.endDate;
            proj.clientName = prjct.clientName;

            db.SaveChanges();
            return true;
        }
    }
}