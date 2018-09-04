import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [

    {

      id: 1,
      name: 'Naresh',
      gender: 'male',
      email: 'sontinaresh.540@gmail.com',
      dateOfBirth: new Date('21/11/1988'),
      phoneNumber: 9603105252,
      isActive: true,
      photoPath: 'assets/images/mark.png',
      department: 'IT',
      contactPreference: 'Email'


    },
    {

      id: 2,
      name: 'Rani',
      gender: 'Female',
      email: 'rani@gmail.com',
      dateOfBirth: new Date('21/11/1992'),
      phoneNumber: 89737432,
      isActive: true,
      photoPath: 'assets/images/mary.png',
      department: 'EEE',
      contactPreference: 'Email'


    },
    {

      id: 3,
      name: 'Kumar',
      gender: 'male',
      email: 'Kumar.540@gmail.com',
      dateOfBirth: new Date('21/01/1967'),
      phoneNumber: 896738234,
      isActive: true,
      photoPath: 'assets/images/john.png',
      department: 'CSE',
      contactPreference: 'Email'
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
