import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  formData: FormGroup;
  constructor(private employeeService: EmployeeService, private http: HttpClient, private router: Router) { }

  employees;
  ngOnInit() {

    this.employeeService.employees$.subscribe(
      data => {
        this.employees = data;
        console.log(this.employees);
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
      empName: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(12)]),
      emailId: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      skillSet: new FormControl('', [Validators.required]),
      managerId: new FormControl('', [Validators.required]),
    });
    console.log(this.formData);
  }

  onClickSubmit(employee) {

    this.employeeService.response$.subscribe(
      data => {
        console.log("Employee created successfully");
        this.router.navigate(['/employee/show'])

      }
    );
    this.employeeService.ErrorResponse$.subscribe(
      message => {
        console.log(message);
        alert(message);
      }
    );
    this.employeeService.createEmployee(employee);

  }

}




