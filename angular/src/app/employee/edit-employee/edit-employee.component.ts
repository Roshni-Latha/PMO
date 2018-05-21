import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  formData: FormGroup;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { }


  id = this.route.snapshot.paramMap.get('id');
  employee = {
    empName: "",
    designation: "",
    contactNo: null,
    emailId: "",
    skillSet: "",
    managerId: null

  };
  managers;
  ngOnInit() {

    // load employee by id
    this.employeeService.employee$.subscribe(
      data => {
        this.employee = data;
        this.employee.empName = data['empName'];
        this.employee.designation = data['designation'];
        this.employee.contactNo = data['contactNo'];
        this.employee.emailId = data['emailId'];
        this.employee.skillSet = data['skillSet'];
        this.employee.managerId = data['managerId'];
        console.log(this.employee);

        this.formData = new FormGroup({
          empName: new FormControl(this.employee.empName, []),
          designation: new FormControl(this.employee.designation, []),
          contactNo: new FormControl(this.employee.contactNo, []),
          emailId: new FormControl(this.employee.emailId, []),
          skillSet: new FormControl(this.employee.skillSet, []),
          managerId: new FormControl(this.employee.managerId, []),
        });
      }
    );
    this.employeeService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.employeeService.getAllEmployeeById(this.id);

    // load managers
    this.employeeService.employees$.subscribe(
      data => {
        this.managers = data;
        console.log(this.managers);
      }
    );
    this.employeeService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.employeeService.getAllEmployees();

    this.formData = new FormGroup({
      empName: new FormControl('', []),
      designation: new FormControl('', []),
      contactNo: new FormControl('', []),
      emailId: new FormControl('', []),
      skillSet: new FormControl('', []),
      managerId: new FormControl('', []),
    });
    console.log(this.formData);

  }

  onClickSubmit(employee) {

    this.employeeService.response$.subscribe(
      data => {
        console.log("Employee Edited successfully");
        this.router.navigate(['/employee/show'])

      }
    );
    this.employeeService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.employeeService.EditEmployee(this.id, employee);

  }
}

