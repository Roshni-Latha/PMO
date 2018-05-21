using WebApi.Common;
using WebApi.Models;
using WebApi.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace WebApi.Controllers
{
    public class EmployeeController : ApiController
    {
        EmployeeRepository repository = new EmployeeRepository();
        ProjectTrackContext db = new ProjectTrackContext();

       
        public IEnumerable<Employee> Get()
        {
            var employees = repository.GetAllEmployees();
            return employees;
        }

        public Employee Get(int id)
        {
            var emp = repository.SearchEmployeeById(id);
            return  emp;
        }

        public void Post(Employee value)
        {
            repository.CreateNewEmployee(value);
        }


        public void Put(int id,Employee value)
        {
            repository.EditEmployee(id, value);
        }

        public void Delete(int id)
        {
            repository.DeleteEmployee(id);
        }
    }
}
