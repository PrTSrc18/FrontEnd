
import { CommonModule  } from '@angular/common';
import { Component, AfterViewInit,ViewChild, viewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule, MatButtonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  searchTerm: string = '';
  displayedColumns: string[] = ['name', 'position', 'dateJoined'];
  dataSource1 = new MatTableDataSource<Employee>(ELEMENT_DATA1);

   @ViewChild(MatPaginator) paginator!: MatPaginator;  
   @ViewChild(MatSort) sort!: MatSort;

   constructor() { }

   ngAfterViewInit() {
     this.dataSource1.paginator = this.paginator; 
     this.dataSource1.sort = this.sort;
  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }

  addData() {

  } 
  getEmployeeData() {
    return ELEMENT_DATA1; // Return the employee data
  }
}
  export interface Employee {
  
    name: string;
    position: string;
    dateJoined: string;
  }
  
  const ELEMENT_DATA1: Employee[] = [
  
      { name: 'Alice Johnson', position: 'Developer', dateJoined: '2020-01-15' },
      { name: 'Bob Smith', position: 'Designer', dateJoined: '2019-05-20' },
      { name: 'Charlie Brown', position: 'Manager', dateJoined: '2018-03-30' },
      { name: 'David Wilson', position: 'Tester', dateJoined: '2021-11-10' },
      { name: 'Eva Adams', position: 'HR', dateJoined: '2022-06-05' },
      { name: 'Frank Baker', position: 'Sales', dateJoined: '2020-08-25' },
      { name: 'Grace Lee', position: 'Support', dateJoined: '2021-02-12' },
      { name: 'Hannah White', position: 'Marketing', dateJoined: '2019-09-08' },
      { name: 'Ian Black', position: 'Developer', dateJoined: '2023-01-01' },
      { name: 'Jack Green', position: 'Designer', dateJoined: '2023-03-15' },
  ]
  

