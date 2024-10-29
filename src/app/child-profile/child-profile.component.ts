import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms'; 
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogAnimationComponent } from '../dialog-animation/dialog-animation.component';
import { CostumerAreaComponent } from "../costumer-area/costumer-area.component";
import { Router } from '@angular/router';
import { MatTabsModule} from '@angular/material/tabs';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-child-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    DialogAnimationComponent,
    CostumerAreaComponent,
    MatTabsModule,
    MatTableModule, 
    MatCheckboxModule,
    MatPaginatorModule,
    MatPaginator, 
    MatSort

],
  templateUrl: './child-profile.component.html',
  styleUrls: ['./child-profile.component.css']
})
export class ChildProfileComponent implements OnInit {
  editEnabled: boolean = false;

  // Child profile properties
  Id: number = 0;
  Modality: string = 'option1';
  MemberNumber: number = 1231231230;
  FirstName: string = 'teste';
  LastName: string = 'teste';
  Address: string = 'teste';
  Locality: string = 'teste';
  PostalCode: string = 'teste';
  DateBirth: Date = new Date();
  Nif: number = 1231230;
  NUS: number = 1231231230;
  Apolice: string = '123345';
  ProfilePicture: string = ''; 
  RelatedPeople: RelatedPerson[] = [ 
    { name: 'John Doe', relationship: 'Father' },
    { name: 'Jane Doe', relationship: 'Mother' }];

  Allergies: string = 'asd';
  Medication: string = 'asd';
  FoodRestrictions: string = 'asd';
  SpecialEducationNeeds: string = 'asd';
  HealthConditions: string = 'asd';

  @Input() childId: number | null = null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;  
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private router: Router) {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
 } 
  navigateToCustomerArea(event: MouseEvent): void {
    this.router.navigate(['/customer-area']);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.childId = +params['id'];
      this.loadChildProfile(this.childId);
    });
  }

  handleButtonClick(): void {
    if (this.editEnabled) {
      this.openDialog('0ms', '0ms'); 
      this.saveChanges();
    }
    this.editEnabled = !this.editEnabled; 
  }

  loadChildProfile(id: number): void {
    console.log(`Load profile for child ID: ${id}`);
  }

  editButton(): void {
    this.editEnabled = !this.editEnabled;
    if (this.editEnabled) {
      console.log('Editing mode enabled');
    } else {
      this.saveChanges();
    }
  }

  saveChanges(): void {
    console.log('Changes saved:', {
      Modality: this.Modality,
      MemberNumber: this.MemberNumber,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Address: this.Address,
      Locality: this.Locality,
      PostalCode: this.PostalCode,
      DateBirth: this.DateBirth,
      Nif: this.Nif,
      NUS: this.NUS,
      Apolice: this.Apolice,
      Allergies: this.Allergies,
      Medication: this.Medication,
      FoodRestrictions: this.FoodRestrictions,
      SpecialEducationNeeds: this.SpecialEducationNeeds,
      HealthConditions: this.HealthConditions,
    });
    }

    addData(){

    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    displayedColumns: string[] = ['select',  'name'];
    dataSource = new MatTableDataSource<Alergias>(ELEMENT_DATA);
    selection = new SelectionModel<Alergias>(true, []);

  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }


  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Alergias): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  }

  interface RelatedPerson {
    name: string;
    relationship: string;
  }


  export interface Alergias {
    id: number;
    name: string;
  }
  
  const ELEMENT_DATA: Alergias[] = [
    {id: 1, name: 'Hydrogen'},
    {id: 2, name: 'Helium'},
    {id: 3, name: 'Lithium'},
    {id: 4, name: 'Beryllium'},
    {id: 5, name: 'Boron'},
    {id: 6, name: 'Carbon' },
    {id: 7, name: 'Nitrogen'},
    {id: 8, name: 'Oxygen'},
    {id: 9, name: 'Fluorine'},
    {id: 10, name: 'Neon'},
  ];