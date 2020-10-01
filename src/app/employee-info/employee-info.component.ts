import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  page = 1;
  searchText:any
  pageSize1 = 10;
  empArray: any = [
    {id: '1', name: 'Bhavika', dob: '11/09/1997', address: 'Andheri', role: 'Employee', salary: '20,000', experience: '1yr'},
    {id: '1', name: 'Bhavika', dob: '11/09/1997', address: 'Andheri', role: 'Employee', salary: '20,000', experience: '1yr'},
    {id: '1', name: 'Bhavika', dob: '11/09/1997', address: 'Andheri', role: 'Employee', salary: '20,000', experience: '1yr'},
    {id: '1', name: 'Bhavika', dob: '11/09/1997', address: 'Andheri', role: 'Employee', salary: '20,000', experience: '1yr'},
    {id: '1', name: 'Bhavika', dob: '11/09/1997', address: 'Andheri', role: 'Employee', salary: '20,000', experience: '1yr'},
    {id: '1', name: 'Bhavika', dob: '11/09/1997', address: 'Andheri', role: 'Employee', salary: '20,000', experience: '1yr'},
    {id: '1', name: 'Bhavika', dob: '11/09/1997', address: 'Andheri', role: 'Employee', salary: '20,000', experience: '1yr'},
    {id: '1', name: 'Bhavika', dob: '11/09/1997', address: 'Andheri', role: 'Employee', salary: '20,000', experience: '1yr'}
  ]
  formShow: boolean;
  form: FormGroup;
  name: any;
  address: any;
  dob: any;
  experience: any;
  role: any;
  salary: any;
 dict = [];
  constructor(private router: Router) {
    this.form = new FormGroup ({
      salary : new FormControl('', Validators.pattern("^[0-9]*$")),
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      experience: new FormControl('', [Validators.required]),
    })
   }

  ngOnInit(): void {
  }
  addEmp() {
    this.formShow = true;
  }
  onSubmit(event) {
console.log('Values--', event);
this.dict.push({
  name: event.name,
  dob:event.date,
  address: event.address,
  role: event.role,
  salary:event.salary,
  experience:  event.experience,
});
this.form.reset();
  }
  backToEmpPage() {
    this.formShow = false;
    this.router.navigate(['employee']);
    
  }
  rowClicked (event) {
    console.log('Event:', event);
   // this.showPopup = true;
    this.name = event.name;
    this.address = event.address;
    this.dob = event.dob;
    this.experience = event.experience;
    this.role = event.role;
    this.salary = event.salary;
  }
}
