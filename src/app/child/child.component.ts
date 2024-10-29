import { AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSort, MatSortModule} from '@angular/material/sort';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterOutlet, 
            FormsModule, 
            CommonModule, 
            MatTableModule, 
            MatPaginatorModule, 
            MatFormFieldModule, 
            MatInputModule, 
            MatSortModule, 
            MatButtonModule, 
            MatTooltipModule],
            
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  searchTerm: string = '';
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'year', 'memberNumber', 'condicoes'];
  dataSource = new MatTableDataSource<Child>(ELEMENT_DATA);
  hoveredRow: number | null = null; 
  
  @Output() childSelected = new EventEmitter<number>();
 @ViewChild(MatPaginator) paginator!: MatPaginator;  
 @ViewChild(MatSort) sort!: MatSort;

 constructor(private router: Router) { }

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator; 
   this.dataSource.sort = this.sort;
} 

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

addData() {

}

goToProfile(childId: number): void {
  this.router.navigate(['/child-profile', childId]);
}

}

export interface Child {
  id: number;
firstName: string;
lastName: string;
year: string;
memberNumber: number;
alergias: boolean;
restricoesAlimentares: boolean;
educacaoEspecial: boolean;
medicacao: boolean;
}

const ELEMENT_DATA: Child[] = [
  { id: 1, firstName: 'Alice', lastName: 'Smith', year: '2010', memberNumber: 1001, alergias: true, restricoesAlimentares: false, educacaoEspecial: true, medicacao: false },
  { id: 2, firstName: 'Bob', lastName: 'Johnson', year: '2011', memberNumber: 1002, alergias: false, restricoesAlimentares: true, educacaoEspecial: false, medicacao: false },
  { id: 3, firstName: 'Charlie', lastName: 'Williams', year: '2012', memberNumber: 1003, alergias: true, restricoesAlimentares: true, educacaoEspecial: false, medicacao: true },
  { id: 4, firstName: 'Daisy', lastName: 'Jones', year: '2013', memberNumber: 1004, alergias: false, restricoesAlimentares: false, educacaoEspecial: true, medicacao: false },
  { id: 5, firstName: 'Ethan', lastName: 'Brown', year: '2014', memberNumber: 1005, alergias: true, restricoesAlimentares: false, educacaoEspecial: true, medicacao: true },
  { id: 6, firstName: 'Fiona', lastName: 'Davis', year: '2015', memberNumber: 1006, alergias: false, restricoesAlimentares: true, educacaoEspecial: false, medicacao: false },
  { id: 7, firstName: 'George', lastName: 'Miller', year: '2016', memberNumber: 1007, alergias: true, restricoesAlimentares: true, educacaoEspecial: true, medicacao: false },
  { id: 8, firstName: 'Hannah', lastName: 'Wilson', year: '2017', memberNumber: 1008, alergias: false, restricoesAlimentares: false, educacaoEspecial: true, medicacao: true },
  { id: 9, firstName: 'Ian', lastName: 'Moore', year: '2018', memberNumber: 1009, alergias: true, restricoesAlimentares: false, educacaoEspecial: false, medicacao: true },
  { id: 10, firstName: 'Julia', lastName: 'Taylor', year: '2019', memberNumber: 1010, alergias: false, restricoesAlimentares: true, educacaoEspecial: true, medicacao: false },
];


