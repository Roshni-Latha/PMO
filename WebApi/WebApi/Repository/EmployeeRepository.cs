using WebApi.Common;
using WebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApi.Repository
{
    public class EmployeeRepository
    {
        ProjectTrackContext db = new ProjectTrackContext();

        public List<Employee> GetAllEmployees()
        {
            return db.Employees.Select(emp => emp).ToList();
        }

        public bool CreateNewEmployee(Employee emp)
        {
            db.Employees.Add(emp);
            db.SaveChanges();
            return true;
        }

        public Employee SearchEmployeeById(int id)
        {
            return db.Employees.Select(emp => emp).Where(emp => emp.empId == id).FirstOrDefault();
        }

        public Employee SearchEmployeeByName(string name)
        {
            return db.Employees.Where(emp => emp.empName == name).FirstOrDefault();
        }

        public bool DeleteEmployee(int id)
        {
            var employee = db.Employees.Where(emp => emp.empId == id).FirstOrDefault();
            db.Employees.Remove(employee);
            db.SaveChanges();
            return true;
        }

        public bool EditEmployee(int id,Employee emp)
        {
            var employee = db.Employees.Where(e => e.empId == id).FirstOrDefault();

           if(employee != null)
            {
                employee.empName = emp.empName;
                employee.designation = emp.designation;
                employee.managerId = emp.managerId;
                employee.emailId = emp.emailId;
                employee.skillSet = emp.skillSet;
                employee.contactNo = emp.contactNo;

                db.SaveChanges();
            }
            return true;
        }
    }
}